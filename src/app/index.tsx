import { Redirect } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { AppCard, AppText, Screen, SectionHeader } from '@/components/common';
import { AppIcon } from '@/components/common/AppIcon';
import { useSessionStore } from '@/store/sessionStore';
import { useTheme } from '@/theme';
import type { UserRole } from '@/types';

/**
 * Entry point. Phase 1: a minimal role picker so both navigation trees can be verified.
 * The full welcome, onboarding and authentication flow is built in Phase 2.
 */
export default function Index() {
  const { t } = useTranslation();
  const { spacing } = useTheme();
  const role = useSessionStore((s) => s.role);
  const setRole = useSessionStore((s) => s.setRole);

  if (role === 'parent') return <Redirect href="/parent" />;
  if (role === 'child') return <Redirect href="/child" />;

  const options: { role: UserRole; icon: 'shield' | 'smile'; title: string; description: string }[] = [
    { role: 'parent', icon: 'shield', title: t('role.parent'), description: t('role.parentDescription') },
    { role: 'child', icon: 'smile', title: t('role.child'), description: t('role.childDescription') },
  ];

  return (
    <Screen>
      <View style={{ gap: spacing.xs, paddingTop: spacing.xl }}>
        <AppText variant="title">{t('app.name')}</AppText>
        <AppText tone="secondary">{t('app.tagline')}</AppText>
      </View>
      <SectionHeader title={t('role.title')} description={t('role.subtitle')} />
      {options.map((option) => (
        <AppCard key={option.role} onPress={() => setRole(option.role)} accessibilityLabel={option.title}>
          <AppIcon name={option.icon} size={24} />
          <AppText variant="subheading">{option.title}</AppText>
          <AppText tone="secondary">{option.description}</AppText>
        </AppCard>
      ))}
    </Screen>
  );
}
