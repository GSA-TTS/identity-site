import { describe, test } from 'node:test';
import { getURL, concurrency } from './support/browser';

/** @typedef {import('puppeteer').CustomError} PuppeteerCustomError */
/** @typedef {import('puppeteer').ConsoleMessage} PuppeteerConsoleMessage */

/** @type {RegExp[]} */
const EXCLUDE_PATTERNS = [/\.pdf$/, /admin/];

/**
 * @param {PuppeteerConsoleMessage} message
 */
function isCORSErrorOnPermittedURLs(message) {
  const text = message.text();
  const { pathname } = new URL(message.location().url);
  return (
    (text.includes('CORS policy') && pathname.endsWith('/international-phone-support/')) ||
    (text.includes('CORS policy') && pathname.endsWith('/international-phone-number-support/')) ||
    (text.includes('Failed to load resource') && pathname === '/api/country-support')
  );
}

/**
 * @param {PuppeteerConsoleMessage} message
 */
const isExemptedConsoleMessage = (message) => isCORSErrorOnPermittedURLs(message);

describe('JavaScript logging', { concurrency }, () => {
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
    if (isExemptedConsoleMessage(message)) {
      return;
    }

    throw new Error(`Unexpected console message: ${message.text()} (in ${message.location().url}`);
  }

  paths.forEach((path) => {
    test(path, async () => {
      const page = await global.browser.newPage();
      page.on('pageerror', handleError);
      page.on('console', handleConsole);
      await page.goto(getURL(path));
      await page.close();
    });
  });
});
