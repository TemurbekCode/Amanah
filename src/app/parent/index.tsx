import { useTranslation } from 'react-i18next';

import { PlaceholderScreen } from '@/components/common';

export default function ScreenParentHome() {
  const { t } = useTranslation();
  return <PlaceholderScreen title={t('nav.home')} icon="home" />;
}
