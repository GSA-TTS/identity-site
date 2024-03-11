import { page, goto } from './support/browser';

/** @typedef {import('puppeteer').CustomError} PuppeteerCustomError */
/** @typedef {import('puppeteer').ConsoleMessage} PuppeteerConsoleMessage */

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

  /**
   * @param {PuppeteerConsoleMessage} message
   */
  function handleConsole(message) {
    throw new Error(
      `Unexpected console message: ${message.text()} ${JSON.stringify(message.stackTrace())}`,
    );
  }

  beforeEach(() => {
    page.on('pageerror', handleError);
    page.on('console', handleConsole);
  });

  afterEach(() => {
    page.off('pageerror', handleError);
    page.off('console', handleConsole);
  });

  test.each(paths)(
    '%s',
    async (path) => {
      await goto(path);
    },
    TEST_TIMEOUT_MS,
  );
});
