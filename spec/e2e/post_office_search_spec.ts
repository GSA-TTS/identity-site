import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import type { Browser } from 'puppeteer';

// @ts-ignore
import { getURL } from './support/browser';

describe('PO search page', () => {
  it('is accessible from the side menu', async () => {
    const page = await ((global as any).browser as Browser).newPage();
    await page.goto(getURL('/help/verify-your-identity/overview/'));

    const link = await page.waitForSelector(
      'xpath///a[contains(text(),"Find a participating Post Office")]',
    );

    assert.notEqual(link, undefined);

    await page.evaluate((a) => (a as HTMLAnchorElement).click(), link);

    await page.waitForNavigation();

    assert(
      page!
        .url()
        .includes(
          '/help/verify-your-identity/verify-your-identity-in-person/find-a-participating-post-office',
        ),
    );
    await page.close();
  });

  it('renders a PO search component', async () => {
    const page = await ((global as any).browser as Browser).newPage();
    await page.goto(
      getURL(
        '/help/verify-your-identity/verify-your-identity-in-person/find-a-participating-post-office',
      ),
    );
    await page.waitForSelector('#post-office-search', { timeout: 1000 });
    await page.close();
  });
});
