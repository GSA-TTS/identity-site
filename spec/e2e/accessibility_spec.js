import { AxePuppeteer } from '@axe-core/puppeteer';
import { toHaveNoViolations } from 'jest-axe';
import { page as globalPage, goto } from './support/browser';
import { getCandidateLinks, toNotHaveTargetBlank } from './support/target-blank';

expect.extend(toHaveNoViolations);
expect.extend({ toNotHaveTargetBlank });

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
      test.concurrent.each(paths)('%s', async (path) => {
        const page = await global.browser.newPage();
        await page.setViewport(viewport);
        await page.goto(new URL(path, process.env.ROOT_URL).toString());
        const runner = new AxePuppeteer(page).disableRules('frame-tested').disableFrame('*');

        const results = await runner.analyze();
        expect(results).toHaveNoViolations();

        const links = await getCandidateLinks(page);
        links.forEach((a) => expect(a).toNotHaveTargetBlank());
        await page.close();
      });
    });
  }

  describe('"Back to top" link', () => {
    it('resets focus to the beginning of content', async () => {
      await goto('/about-us/');
      const backToTopLinkHandle = await globalPage.$('.page-content__prose .anchor-to-top');
      await backToTopLinkHandle.click();
      await globalPage.keyboard.press('Tab');
      const isFocusBeforeBackToTop = await globalPage.evaluate(
        (backToTopLink) =>
          backToTopLink.compareDocumentPosition(document.activeElement) ===
          Node.DOCUMENT_POSITION_PRECEDING,
        backToTopLinkHandle,
      );

      expect(isFocusBeforeBackToTop).toEqual(true);
    });
  });
});
