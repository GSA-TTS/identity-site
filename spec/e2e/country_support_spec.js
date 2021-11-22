import { goto, page } from './support/browser';

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
    },
  };

  test('renders a table of country codes', async () => {
    await page.setRequestInterception(true);

    page.on('request', (interceptedRequest) => {
      if (interceptedRequest.url().endsWith('/country-support')) {
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

    await goto('/help/manage-your-account/international-phone-support/');

    const table = await page.waitForSelector('.js-country-support:not([hidden]) table');
    expect((await table.$$('tbody tr')).length).toBe(2);
    expect(await table.$eval('tbody tr:nth-child(1) td:nth-child(1)', (el) => el.innerText)).toBe(
      'Canada (CA)',
    );
    expect(await table.$eval('tbody tr:nth-child(2) td:nth-child(1)', (el) => el.innerText)).toBe(
      'United States (US)',
    );
  });
});
