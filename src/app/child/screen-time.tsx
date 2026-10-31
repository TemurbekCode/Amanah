import { useTranslation } from 'react-i18next';

import { PlaceholderScreen } from '@/components/common';

export default function ScreenChildScreenTime() {
  const { t } = useTranslation();
  return <PlaceholderScreen title={t('nav.screenTime')} icon="clock" />;
}
