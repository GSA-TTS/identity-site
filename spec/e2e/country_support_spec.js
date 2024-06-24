import { describe, test } from 'node:test';
import assert from 'node:assert/strict';
import { getURL } from './support/browser.js';

describe('country support', () => {
  /** @type {import('../../assets/js/country_support.js').CountrySupport} */
  const RESPONSE = {
    countries: {
      US: {
        name: 'United States',
        country_code: '1',
        supports_sms: true,
        supports_voice: true,
      },
      CA: {
        name: 'Canada',
        country_code: '1',
        supports_sms: true,
        supports_voice: false,
      },
      UY: {
        name: 'Uruguay',
        country_code: '598',
        supports_sms: true,
        supports_sms_unconfirmed: false,
        supports_voice: true,
        supports_voice_unconfirmed: false,
      },
    },
  };

  test('renders a table of country codes', async () => {
    const page = await global.browser.newPage();
    await page.setRequestInterception(true);

    page.on('request', (interceptedRequest) => {
      if (interceptedRequest.url().endsWith('/country-support?locale=en')) {
        interceptedRequest.respond({
          contentType: 'application/json',
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
          body: JSON.stringify(RESPONSE),
        });
      } else {
        interceptedRequest.continue();
      }
    });

    await page.goto(getURL('/help/manage-your-account/international-phone-support/'));

    const table = await page.waitForSelector('.js-country-support:not([hidden]) table');
    assert.equal((await table.$$('tbody tr')).length, 3);
    assert.equal(
      await table.$eval('tbody tr:nth-child(1) td:nth-child(1)', (el) => el.innerText),
      'Canada (CA)',
    );
    assert.equal(
      await table.$eval('tbody tr:nth-child(2) td:nth-child(1)', (el) => el.innerText),
      'United States (US)',
    );
    assert.equal(
      await table.$eval('tbody tr:nth-child(3) td:nth-child(1)', (el) => el.innerText),
      'Uruguay (UY)',
    );
    assert.equal(
      await table.$eval('tbody tr:nth-child(3) td:nth-child(3)', (el) => el.innerText.trim()),
      'No',
    );
    assert.equal(
      await table.$eval('tbody tr:nth-child(3) td:nth-child(4)', (el) => el.innerText.trim()),
      'No',
    );
    await page.close();
  });
});
