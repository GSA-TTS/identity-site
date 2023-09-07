import React from 'react';
import { createRoot } from 'react-dom/client';
// @ts-ignore
import AddressSearch from '@18f/identity-address-search';

const elem = document.getElementById('post-office-search')!;
const root = createRoot(elem);
const { addressSearchUrl, locationsSearchUrl } = elem.dataset;

root.render(
  <AddressSearch
    addressSearchURL={addressSearchUrl}
    locationsURL={locationsSearchUrl}
    onFoundLocations={() => {}}
  />,
);
