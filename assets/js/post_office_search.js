import React from 'react';
import { createRoot } from 'react-dom/client';
import AddressSearch from '@18f/identity-address-search';

const root = createRoot(document.getElementById('search'));
root.render(React.createElement(AddressSearch));
