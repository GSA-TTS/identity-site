import { extname } from 'path';
import { AxePuppeteer } from '@axe-core/puppeteer';
import { toHaveNoViolations } from 'jest-axe';
import { page, goto } from './support/browser';

expect.extend(toHaveNoViolations);

const TEST_TIMEOUT_MS = 10000;

describe('accessibility', () => {
  const urls = global.allURLs.filter((url) => !extname(new URL(url).pathname));

  test.each(urls)(
    '%s',
    async (url) => {
      const path = new URL(url).pathname;
      await goto(path);
      const results = await new AxePuppeteer(page).analyze();
      try {
        expect(results).toHaveNoViolations();
      } catch (error) {
        error.message = `Path: ${path}\n\n` + error.message;
        throw error;
      }
    },
    TEST_TIMEOUT_MS,
  );
});
