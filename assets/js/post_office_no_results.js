import React from 'react';

const PostOfficeNoResults = ({ address }) => (
  <div className="grid-col-12 inline-block" style={{ display: 'inline-block' }}>
    <h3 role="status">
      site.data.[page.lang].settings.in_person_proofing.po_search.none_found {address}
    </h3>
    <p>site.data.[page.lang].settings.in_person_proofing.po_search.none_found_tip</p>
  </div>
);

export default PostOfficeNoResults;
