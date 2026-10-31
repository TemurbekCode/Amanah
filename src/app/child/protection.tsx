import { useTranslation } from 'react-i18next';

import { PlaceholderScreen } from '@/components/common';

export default function ScreenChildProtection() {
  const { t } = useTranslation();
  return <PlaceholderScreen title={t('nav.protection')} icon="shield" />;
}
