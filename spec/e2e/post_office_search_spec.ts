import type { Page } from 'puppeteer';

// @ts-ignore
import { page as originalPage, goto as originalGoto } from './support/browser';

const page = originalPage as Page;
const goto = originalGoto as (path: string) => ReturnType<Page['goto']>;

describe('PO search page', () => {
  describe('PO search page enabled', () => {
    let it;
    if (process.env.PO_SEARCH_TESTING_ENABLED) {
      it = global.it;
    } else {
      it = global.it.skip;
    }

    it('is accessible from the side menu', async () => {
      await goto('/help/verify-your-identity/overview/');

      const link = await page.waitForXPath(
        '//a[contains(text(),"Find a Participating Post Office to finish identity verification")]',
        { timeout: 1000 },
      );

      expect(link).not.toBeUndefined();

      await page.evaluate((a) => (a as HTMLAnchorElement).click(), link);

      await page.waitForNavigation();

      expect(page!.url()).toContain(
        '/help/verify-your-identity/verify-your-identity-in-person/find-a-participating-post-office',
      );
    });

    it('renders a PO search component', async () => {
      await goto(
        '/help/verify-your-identity/verify-your-identity-in-person/find-a-participating-post-office',
      );
      await page.waitForSelector('#post-office-search input', { timeout: 1000 });
    });
  });

  describe('PO search page disabled', () => {
    let it;
    if (process.env.PO_SEARCH_TESTING_ENABLED) {
      it = global.it.skip;
    } else {
      it = global.it;
    }

    it('is not accessible from the side menu', async () => {
      await goto('/help/verify-your-identity/overview/');

      await expect(
        page.waitForXPath(
          '//a[contains(text(),"Find a Participating Post Office to finish identity verification")]',
          { timeout: 1000 },
        ),
      ).rejects.toEqual(expect.anything());
    });

    it('does not render a PO search component', async () => {
      await goto(
        '/help/verify-your-identity/verify-your-identity-in-person/find-a-participating-post-office',
      );
      await expect(
        page.waitForSelector('#post-office-search input', { timeout: 1000 }),
      ).rejects.toEqual(expect.anything());
    });
  });
});
