import { useTranslation } from 'react-i18next';

import { LegalPlaceholder } from '@/features/legal/LegalPlaceholder';

export default function PrivacyScreen() {
  const { t } = useTranslation();
  return <LegalPlaceholder title={t('legal.privacyTitle')} />;
}
