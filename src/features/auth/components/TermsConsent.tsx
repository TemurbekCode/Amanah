import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';

import { AppCheckbox, AppText } from '@/components/common';

interface Props {
  checked: boolean;
  onChange: (value: boolean) => void;
  error?: string;
}

export function TermsConsent({ checked, onChange, error }: Props) {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <AppCheckbox
      checked={checked}
      onChange={onChange}
      error={error}
      accessibilityLabel={t('auth.acceptTermsLabel')}
    >
      <AppText variant="caption" tone="secondary">
        {t('auth.termsPrefix')}
        <AppText
          variant="caption"
          tone="primary"
          accessibilityRole="link"
          style={{ fontWeight: '600' }}
          onPress={() => router.push('/legal/terms')}
        >
          {t('auth.termsLink')}
        </AppText>
        {t('auth.termsAnd')}
        <AppText
          variant="caption"
          tone="primary"
          accessibilityRole="link"
          style={{ fontWeight: '600' }}
          onPress={() => router.push('/legal/privacy')}
        >
          {t('auth.privacyLink')}
        </AppText>
        {t('auth.termsSuffix')}
      </AppText>
    </AppCheckbox>
  );
}
