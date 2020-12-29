import { AxePuppeteer } from '@axe-core/puppeteer';
import { toHaveNoViolations } from 'jest-axe';
import { page, goto } from './support/browser';

expect.extend(toHaveNoViolations);

const TEST_TIMEOUT_MS = 10000;

describe('accessibility', () => {
  const paths = global.allURLs
    .map((url) => new URL(url).pathname)
    .filter((path) => !path.endsWith('.pdf'));

  test.each(paths)(
    '%s',
    async (path) => {
      await goto(path);
      const results = await new AxePuppeteer(page)
        .exclude('.footer') // See: LG-3561 (TODO: Remove with implementation of LG-3561)
        .analyze();
      expect(results).toHaveNoViolations();
    },
    TEST_TIMEOUT_MS,
  );
});
