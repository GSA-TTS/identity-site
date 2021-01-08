import { AxePuppeteer } from '@axe-core/puppeteer';
import { toHaveNoViolations } from 'jest-axe';
import { page, goto } from './support/browser';

/**
 * @typedef SimplifiedLink
 *
 * @prop {string=} innerText
 * @prop {string=} href
 * @prop {string=} className
 * @prop {string=} target
 */

/**
 * @param {SimplifiedLink} a
 */
function toNotHaveTargetBlank(a) {
  return {
    pass: a.target != '_blank',
    message: () => `Link "${a.innerText}" to ${a.href} had target=_blank, but it should not have`
  }
}

expect.extend(toHaveNoViolations);
expect.extend({ toNotHaveTargetBlank });

const TEST_TIMEOUT_MS = 10000;

/** @type {RegExp[]} */
const EXCLUDE_PATTERNS = [
  /\.pdf$/, // Puppeteer Chromium cannot preview PDF files
  /^\/about\/$/, // See: LG-3809 (TODO: Remove with implementation of LG-3809)
  /^\/404\.html$/, // See: LG-3455 (TODO: Remove with implementation of LG-3455)
  /^\/partners\//, // TODO: Remove with https://github.com/18F/identity-site/pull/483
];

describe('accessibility', () => {
  const paths = global.allURLs
    .map((url) => new URL(url).pathname)
    .filter((path) => !EXCLUDE_PATTERNS.some((pattern) => pattern.test(path)));

  test.each(paths)(
    '%s',
    async (path) => {
      await goto(path);
      const results = await new AxePuppeteer(page)
        .disableRules('frame-tested')
        .exclude('iframe')
        .exclude('.footer-nav') // See: LG-4038 (TODO: Remove with implementation of LG-4038)
        .analyze();
      expect(results).toHaveNoViolations();

      /** @type {SimplifiedLink[]} */
      let links = await page.evaluate(() =>
        Array.prototype.map.call(document.querySelectorAll('a'), a => {
          // There's a weird serialization boundary here so we encode the links as a structure
          return {
            innerText: a.innerText.trim(),
            href: a.href,
            className: a.className,
            target: a.target,
          };
        })
      );
      Array.from(links).forEach(a => {
        expect(a).toNotHaveTargetBlank();
      })
    },
    TEST_TIMEOUT_MS,
  );
});
