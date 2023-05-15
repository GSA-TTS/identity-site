import { AxePuppeteer } from '@axe-core/puppeteer';
import { toHaveNoViolations } from 'jest-axe';
import { page, goto } from './support/browser';
import { getCandidateLinks, toNotHaveTargetBlank } from './support/target-blank';

expect.extend(toHaveNoViolations);
expect.extend({ toNotHaveTargetBlank });

const TEST_TIMEOUT_MS = 10000;

/** @type {RegExp[]} */
const EXCLUDE_PATTERNS = [
  /\.pdf$/, // Puppeteer Chromium cannot preview PDF files
  /admin/,
];

describe('accessibility', () => {
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
      /** @type {import('puppeteer').Viewport} */
      let originalViewport;

      beforeAll(async () => {
        originalViewport = page.viewport();
        await page.setViewport(viewport);
      });

      afterAll(async () => {
        await page.setViewport(originalViewport);
      });

      test.each(paths)(
        '%s',
        async (path) => {
          await goto(path);
          const runner = new AxePuppeteer(page).disableRules('frame-tested').disableFrame('*');

          const results = await runner.analyze();
          expect(results).toHaveNoViolations();

          const links = await getCandidateLinks(page);
          links.forEach((a) => expect(a).toNotHaveTargetBlank());
        },
        TEST_TIMEOUT_MS,
      );
    });
  }

  describe('"Back to top" link', () => {
    it('resets keyboard tabbing to the beginning of content', async () => {
      await goto('/about-us/');
      const backToTopLinkHandle = await page.$('.page-content__prose .anchor-to-top');
      await page.click(backToTopLinkHandle);
      await page.keyboard.press('Tab');
      const isFocusBeforeBackToTop = await page.evaluate(
        (backToTopLink) =>
          backToTopLink.compareDocumentPosition(document.activeElement) ===
          Node.DOCUMENT_POSITION_PRECEDING,
        backToTopLinkHandle,
      );

      expect(isFocusBeforeBackToTop).toEqual(true);
    });
  });
});
