import { page, goto } from './support/browser';

describe('country support', () => {
  it('renders a table of country codes', () => {
    await goto('/help/manage-your-account/international-phone-support/');

  })
});
