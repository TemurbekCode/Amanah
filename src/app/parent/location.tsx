import { useTranslation } from 'react-i18next';

import { PlaceholderScreen } from '@/components/common';

export default function ScreenParentLocation() {
  const { t } = useTranslation();
  return <PlaceholderScreen title={t('nav.location')} icon="map-pin" />;
}
