/* eslint-disable no-loop-func */

import { before, after, describe, test } from 'node:test';
import assert from 'node:assert';
import puppeteer from 'puppeteer';
import { AxePuppeteer } from '@axe-core/puppeteer';
import serve from './support/serve.cjs';
import crawl from './support/crawl.cjs';
import { getCandidateLinks } from './support/target-blank.mjs';

const ALL_URLS = await crawl('_site/sitemap.xml');

/** @type {RegExp[]} */
const EXCLUDE_PATTERNS = [
  /\.pdf$/, // Puppeteer Chromium cannot preview PDF files
  /admin/,
];

describe('accessibility', () => {
  /** @type {import('http').Server} */
  let server;

  /** @type {string} */
  let rootURL;

  const paths = ALL_URLS.map((url) => new URL(url).pathname).filter(
    (path) => !EXCLUDE_PATTERNS.some((pattern) => pattern.test(path)),
  );

  before(async () => {
    let port;
    ({ server, port } = await serve());
    rootURL = `http://localhost:${port}`;
  });

  after(async () => {
    await server.close();
  });

  /** @type {Record<string, Partial<import('puppeteer').Viewport>>} */
  const viewports = {
    small: { width: 800, height: 600 },
    large: { width: 1280, height: 800 },
  };

  for (const [label, viewport] of Object.entries(viewports)) {
    describe(`${label} viewport`, { concurrency: 6 }, () => {
      /** @type {import('puppeteer').Browser} */
      let browser;

      before(async () => {
        browser = await puppeteer.launch({
          headless: 'new',
          args: [`--window-size=${viewport.width},${viewport.height}`],
        });
      });

      after(async () => {
        await browser.close();
      });

      for (const path of paths) {
        test(path, async () => {
          const page = await browser.newPage();
          await page.goto(new URL(path, rootURL).toString());
          const runner = new AxePuppeteer(page).disableRules('frame-tested').disableFrame('*');
          const results = await runner.analyze();
          assert.equal(results.violations.length, 0);
          const links = await getCandidateLinks(page);
          links.forEach((a) => [
            assert.notEqual(
              a.target,
              '_blank',
              `Link "${a.innerText}" to ${a.href} had target=_blank, but it should not have`,
            ),
          ]);
          await page.close();
        });
      }
    });
  }
});
