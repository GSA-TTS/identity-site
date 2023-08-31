import React from 'react';

const PostOfficeNoResults = ({address}) => {
    return (
      <div className="grid-col-12 inline-block" style={{display: "inline-block"}}>
        <h3 role="status">
          {/* {t('site.data.[page.lang].settings.in_person_proofing.po_search.none_found', {address} )} */}
          site.data.[page.lang].settings.in_person_proofing.po_search.none_found
        </h3>
        {/* <p>{t('site.data.[page.lang].settings.in_person_proofing.po_search.none_found_tip')}</p> */}
        <p>site.data.[page.lang].settings.in_person_proofing.po_search.none_found_tip</p>
      </div>
    )
  }

export default PostOfficeNoResults;