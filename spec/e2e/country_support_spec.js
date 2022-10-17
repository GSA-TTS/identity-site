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

    await goto('/help/manage-your-account/international-phone-support/');

    const table = await page.waitForSelector('.js-country-support:not([hidden]) table');
    expect((await table.$$('tbody tr')).length).toBe(3);
    expect(await table.$eval('tbody tr:nth-child(1) td:nth-child(1)', (el) => el.innerText)).toBe(
      'Canada (CA)',
    );
    expect(await table.$eval('tbody tr:nth-child(2) td:nth-child(1)', (el) => el.innerText)).toBe(
      'United States (US)',
    );

    expect(await table.$eval('tbody tr:nth-child(3) td:nth-child(1)', (el) => el.innerText)).toBe(
      'Uruguay (UY)',
    );
    expect(
      await table.$eval('tbody tr:nth-child(3) td:nth-child(3)', (el) => el.innerText.trim()),
    ).toBe('No');
    expect(
      await table.$eval('tbody tr:nth-child(3) td:nth-child(4)', (el) => el.innerText.trim()),
    ).toBe('No');
  });
});
