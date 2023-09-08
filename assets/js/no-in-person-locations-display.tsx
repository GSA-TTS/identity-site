import React from 'react';

interface NoInPersonLocationsDisplayProps {
  address: string;
}

function NoInPersonLocationsDisplay({ address }: NoInPersonLocationsDisplayProps) {
  return (
    <h2 role="status">
      site.data.[page.lang].settings.in_person_proofing.po_search.none_found {address}
    </h2>
  );
}

export default NoInPersonLocationsDisplay;
