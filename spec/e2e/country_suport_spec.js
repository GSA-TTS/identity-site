import { goto, page } from './support/browser';

describe('country support', () => {
  /** @type import('../../assets/js/country_support.js').CountrySupport */
  const RESPONSE = {
    countries: {
      US: {
        name: 'United States',
        support_sms: true,
        supports_voice: true,
      },
      CA: {
        name: 'Canada',
        support_sms: true,
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
          body: JSON.stringify(RESPONSE),
        });
      } else {
        interceptedRequest.continue();
      }
    });

    await goto('/help/manage-your-account/international-phone-support/');

    const table = await page.$('table.js-country-support');
    expect((await table.$('tbody tr')).length).to.eq(2);
    expect((await table.$('tbody tr:nth-child(0) td:nth-child(0)')).innerText).to.eq('Canada');
    expect((await table.$('tbody tr:nth-child(1) td:nth-child(0)')).innerText).to.eq(
      'United States',
    );
  });
});
