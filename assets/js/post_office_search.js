import React from 'react';
import { createRoot } from 'react-dom/client';
import AddressSearch from '@18f/identity-address-search';

const root = createRoot(document.getElementById('post-office-search'));
root.render(
  React.createElement(AddressSearch, {
    addressSearchURL: 'https://idp.dev.identitysandbox.gov/api/address_search',
    locationsURL: 'https://idp.dev.identitysandbox.gov/api/usps_locations',
  }),
);
