import React from 'react';
import { createRoot } from 'react-dom/client';
import AddressSearch from '@18f/identity-address-search';

const elem = document.getElementById('post-office-search');
const root = createRoot(elem);
const { addressSearchUrl, locationsSearchUrl } = elem.dataset;

root.render(
  React.createElement(AddressSearch, {
    addressSearchURL: addressSearchUrl,
    locationsURL: locationsSearchUrl,
  }),
);
