// @ts-ignore
import { t } from '@18f/identity-i18n';

interface NoInPersonLocationsDisplayProps {
  address: string;
}

function NoInPersonLocationsDisplay({ address }: NoInPersonLocationsDisplayProps) {
  return (
    <h2 role="status">{t('in_person_proofing.body.location.po_search.none_found', { address })}</h2>
  );
}

export default NoInPersonLocationsDisplay;
