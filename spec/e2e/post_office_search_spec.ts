import type { Page } from 'puppeteer';

// @ts-ignore
import { page as originalPage, goto as originalGoto } from './support/browser';

const page = originalPage as Page;
const goto = originalGoto as (path: string) => ReturnType<Page['goto']>;

describe('PO search page', () => {
  it('is accessible from the side menu', async () => {
    await goto('/help/verify-your-identity/overview/');

    const link = await page.waitForSelector(
      'xpath///a[contains(text(),"Find a Participating Post Office")]',
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
    await page.waitForSelector('#post-office-search', { timeout: 1000 });
  });
});
