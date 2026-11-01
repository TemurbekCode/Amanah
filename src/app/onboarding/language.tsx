import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { AppButton, SettingsItem } from '@/components/common';
import { AuthLayout } from '@/features/auth/components/AuthLayout';
import { useSettingsStore } from '@/store/settingsStore';
import { useTheme } from '@/theme';
import type { AppLanguage } from '@/types';

const LANGUAGES: readonly AppLanguage[] = ['en', 'uz'];

export default function LanguageSetupScreen() {
  const { t } = useTranslation();
  const router = useRouter();
  const { spacing } = useTheme();
  const language = useSettingsStore((s) => s.language);
  const setLanguage = useSettingsStore((s) => s.setLanguage);

  return (
    <AuthLayout title={t('languageSetup.title')} subtitle={t('languageSetup.subtitle')}>
      <View style={{ gap: spacing.md }}>
        {LANGUAGES.map((code) => (
          <SettingsItem
            key={code}
            icon="globe"
            title={t(`language.${code}`)}
            selected={language === code}
            onPress={() => setLanguage(code)}
          />
        ))}
      </View>
      <AppButton title={t('common.continue')} onPress={() => router.push('/auth/register')} />
    </AuthLayout>
  );
}
