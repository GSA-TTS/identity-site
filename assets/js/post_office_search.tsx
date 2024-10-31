import { createRoot } from 'react-dom/client';
// @ts-ignore
import { FullAddressSearch } from '@18f/identity-address-search';
// @ts-ignore
import { Alert } from '@18f/identity-components';
// @ts-ignore
import { t } from '@18f/identity-i18n';
import NoInPersonLocationsDisplay from './no_in_person_locations_display';
import { UsStatesTerritories } from './form_helper';

interface PostOfficeSearchElementDataset extends DOMStringMap {
  locationsSearchUrl: string;
}

export function render() {
  const elem = document.getElementById('post-office-search')!;
  const root = createRoot(elem);
  const { locationsSearchUrl } = elem.dataset as PostOfficeSearchElementDataset;
  const localizedLocationsSearchUrl = new URL(locationsSearchUrl);
  localizedLocationsSearchUrl.searchParams.set('locale', document.documentElement.lang);

  root.render(
    <form>
      <FullAddressSearch
        noValidate
        disabled={false}
        handleLocationSelect={null}
        locationsURL={localizedLocationsSearchUrl}
        noInPersonLocationsDisplay={NoInPersonLocationsDisplay}
        onFoundLocations={() => {}}
        registerField={() => {}}
        resultsHeaderComponent={() => (
          <Alert type="info" className="margin-bottom-4">
            <strong>
              {t('in_person_proofing.body.location.po_search.you_must_start.message', {
                app_name: 'Login.gov',
              })}
            </strong>{' '}
            <a href={t('in_person_proofing.body.location.po_search.you_must_start.link')}>
              {t('in_person_proofing.body.location.po_search.you_must_start.link_text')}
            </a>
          </Alert>
        )}
        usStatesTerritories={UsStatesTerritories}
        resultsSectionHeading={() => <h2>Search results for Post Offices near you</h2>}
      />
    </form>,
  );
}

if (process.env.NODE_ENV !== 'test') {
  render();
}
