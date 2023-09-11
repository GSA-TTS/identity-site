import React from 'react';

interface NoInPersonLocationsDisplayProps {
  address: string;
}

function NoInPersonLocationsDisplay({ address }: NoInPersonLocationsDisplayProps) {
  return (
    <h2 role="status">
      in_person_proofing.body.location.po_search.none_found {address}
    </h2>
  );
}

export default NoInPersonLocationsDisplay;
