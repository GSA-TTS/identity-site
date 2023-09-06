import React from 'react';

const NoInPersonLocationsDisplay = ({ address }) => (
  <h2 role="status">
    site.data.[page.lang].settings.in_person_proofing.po_search.none_found {address}
  </h2>
);

export default NoInPersonLocationsDisplay;