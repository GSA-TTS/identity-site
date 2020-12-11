import { AxePuppeteer } from '@axe-core/puppeteer';
import { toHaveNoViolations } from 'jest-axe';
import { page, goto, getURL } from './support/browser';
import crawl from './support/crawl';

expect.extend(toHaveNoViolations);

describe('accessibility', () => {
  it('passes automated accessibility scan', async () => {
    for await (const url of crawl(getURL('sitemap.xml'))) {
      const path = new URL(url).pathname;
      await goto(path);
      const results = await new AxePuppeteer(page).analyze();
      try {
        expect(results).toHaveNoViolations();
      } catch (error) {
        error.message = `Path: ${path}\n\n` + error.message;
        throw error;
      }
    }
  });
});
