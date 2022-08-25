import { page, goto } from './support/browser';

/** @typedef {import('puppeteer').CustomError} PuppeteerCustomError */

const TEST_TIMEOUT_MS = 10000;

/** @type {RegExp[]} */
const EXCLUDE_PATTERNS = [/\.pdf$/, /admin/];

describe('JavaScript logging', () => {
  const paths = JSON.parse(process.env.ALL_URLS)
    .map((url) => new URL(url).pathname)
    .filter((path) => !EXCLUDE_PATTERNS.some((pattern) => pattern.test(path)));

  /**
   * @param {PuppeteerCustomError} error
   */
  function handleError({ message }) {
    throw new Error(`Unexpected JavaScript error: ${message}`);
  }

  beforeEach(() => {
    page.on('pageerror', handleError);
  });

  afterEach(() => {
    page.off('pageerror', handleError);
  });

  test.each(paths)(
    '%s',
    async (path) => {
      await goto(path);
    },
    TEST_TIMEOUT_MS,
  );
});
