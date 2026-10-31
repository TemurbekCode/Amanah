import { useRouter } from 'expo-router';
import type { ReactNode } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { MIN_TOUCH_TARGET, useTheme } from '@/theme';

import { AppIcon } from './AppIcon';
import { AppText } from './AppText';

interface Props {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  right?: ReactNode;
}

export function AppHeader({ title, subtitle, showBack = false, right }: Props) {
  const { spacing } = useTheme();
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <View style={[styles.row, { gap: spacing.md }]}>
      {showBack ? (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t('common.back')}
          onPress={() => (router.canGoBack() ? router.back() : router.replace('/'))}
          style={styles.touch}
        >
          <AppIcon name="arrow-left" size={22} />
        </Pressable>
      ) : null}
      <View style={styles.flex}>
        <AppText variant="title" accessibilityRole="header">
          {title}
        </AppText>
        {subtitle ? (
          <AppText variant="body" tone="secondary">
            {subtitle}
          </AppText>
        ) : null}
      </View>
      {right}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center' },
  flex: { flex: 1 },
  touch: {
    width: MIN_TOUCH_TARGET,
    height: MIN_TOUCH_TARGET,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
