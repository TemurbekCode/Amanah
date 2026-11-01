import { useRouter } from 'expo-router';
import type { ReactNode } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { AppIcon, AppText, Screen } from '@/components/common';
import { LogoMark } from '@/components/brand/Logo';
import { MIN_TOUCH_TARGET, useTheme } from '@/theme';

interface Props {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  children: ReactNode;
}

/** Shared frame for onboarding-style and authentication screens. */
export function AuthLayout({ title, subtitle, showBack = true, children }: Props) {
  const { spacing } = useTheme();
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <Screen>
      <View style={styles.top}>
        {showBack ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={t('common.back')}
            onPress={() => (router.canGoBack() ? router.back() : router.replace('/'))}
            style={styles.back}
          >
            <AppIcon name="arrow-left" size={22} />
          </Pressable>
        ) : (
          <View style={styles.back} />
        )}
        <LogoMark size={36} />
      </View>
      <View style={{ gap: spacing.xs }}>
        <AppText variant="title" accessibilityRole="header">
          {title}
        </AppText>
        {subtitle ? (
          <AppText tone="secondary">{subtitle}</AppText>
        ) : null}
      </View>
      {children}
    </Screen>
  );
}

const styles = StyleSheet.create({
  top: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  back: { width: MIN_TOUCH_TARGET, height: MIN_TOUCH_TARGET, justifyContent: 'center' },
});
