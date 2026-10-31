import { useTranslation } from 'react-i18next';

import { PlaceholderScreen } from '@/components/common';

export default function ScreenParentApps() {
  const { t } = useTranslation();
  return <PlaceholderScreen title={t('nav.apps')} icon="grid" />;
}
