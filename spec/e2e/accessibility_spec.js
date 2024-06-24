import { describe, test, it } from 'node:test';
import assert from 'node:assert/strict';
import { AxePuppeteer } from '@axe-core/puppeteer';
import { getURL, concurrency } from './support/browser';
import { getCandidateLinks } from './support/target-blank';

/** @type {RegExp[]} */
const EXCLUDE_PATTERNS = [
  /\.pdf$/, // Puppeteer Chromium cannot preview PDF files
  /admin/,
];

describe('accessibility', { concurrency }, () => {
  const paths = JSON.parse(process.env.ALL_URLS)
    .map((url) => new URL(url).pathname)
    .filter((path) => !EXCLUDE_PATTERNS.some((pattern) => pattern.test(path)));

  /** @type {Record<string, Partial<import('puppeteer').Viewport>>} */
  const viewports = {
    small: { width: 800, height: 600 },
    large: { width: 1280, height: 800 },
  };

  for (const [label, viewport] of Object.entries(viewports)) {
    describe(`${label} viewport`, () => {
      paths.forEach((path) => {
        test(path, async () => {
          const page = await global.browser.newPage();
          await page.setViewport(viewport);
          await page.goto(new URL(path, process.env.ROOT_URL).toString());
          const runner = new AxePuppeteer(page).disableRules('frame-tested').disableFrame('*');

          const results = await runner.analyze();
          assert.deepEqual(results.violations, []);

          const links = await getCandidateLinks(page);
          links.forEach((a) => assert.notEqual(a.target, '_blank'));
          await page.close();
        });
      });
    });
  }

  describe('"Back to top" link', () => {
    it('resets focus to the beginning of content', async () => {
      const page = await global.browser.newPage();
      await page.goto(getURL('/about-us/'));
      const backToTopLinkHandle = await page.$('.usa-prose .anchor-to-top');
      await backToTopLinkHandle.click();
      await page.keyboard.press('Tab');
      const isFocusBeforeBackToTop = await page.evaluate(
        (backToTopLink) =>
          backToTopLink.compareDocumentPosition(document.activeElement) ===
          Node.DOCUMENT_POSITION_PRECEDING,
        backToTopLinkHandle,
      );

      assert.equal(isFocusBeforeBackToTop, true);
      await page.close();
    });
  });
});
