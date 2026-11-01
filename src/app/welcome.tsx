import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';

import { LogoMark } from '@/components/brand/Logo';
import { AppButton, AppText, Screen, SegmentedControl, TextLink } from '@/components/common';
import { BRAND_NAME_AR } from '@/constants/brand';
import { useSettingsStore } from '@/store/settingsStore';
import { useTheme } from '@/theme';
import type { AppLanguage } from '@/types';

export default function WelcomeScreen() {
  const { t } = useTranslation();
  const router = useRouter();
  const { spacing } = useTheme();
  const language = useSettingsStore((s) => s.language);
  const setLanguage = useSettingsStore((s) => s.setLanguage);

  const languages: { value: AppLanguage; label: string }[] = [
    { value: 'en', label: t('language.en') },
    { value: 'uz', label: t('language.uz') },
  ];

  return (
    <Screen>
      <View style={styles.language}>
        <SegmentedControl options={languages} value={language} onChange={setLanguage} />
      </View>

      <View style={[styles.hero, { gap: spacing.lg, paddingVertical: spacing.xxl }]}>
        <LogoMark size={88} />
        <View style={[styles.center, { gap: spacing.xs }]}>
          <AppText variant="title" style={styles.titleText}>
            {t('app.name')}
          </AppText>
          <AppText variant="subheading" tone="secondary" style={styles.rtl}>
            {BRAND_NAME_AR}
          </AppText>
          <AppText variant="subheading" tone="primary">
            {t('app.tagline')}
          </AppText>
        </View>
        <AppText tone="secondary" style={styles.description}>
          {t('welcome.description')}
        </AppText>
      </View>

      <View style={{ gap: spacing.sm }}>
        <AppButton title={t('welcome.getStarted')} onPress={() => router.push('/onboarding')} />
        <View style={styles.center}>
          <TextLink label={t('welcome.haveAccount')} onPress={() => router.push('/auth/login')} />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  language: { alignSelf: 'flex-end', width: 200 },
  hero: { alignItems: 'center' },
  center: { alignItems: 'center' },
  titleText: { textAlign: 'center' },
  rtl: { writingDirection: 'rtl' },
  description: { textAlign: 'center', maxWidth: 420 },
});
