import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { useTheme } from '@/theme';

import { AppText } from './AppText';

export function LoadingState({ message }: { message?: string }) {
  const { colors, spacing } = useTheme();
  const { t } = useTranslation();

  return (
    <View
      accessibilityRole="progressbar"
      style={[styles.wrap, { backgroundColor: colors.background, gap: spacing.md }]}
    >
      <ActivityIndicator color={colors.primary} />
      <AppText variant="body" tone="secondary">
        {message ?? t('common.loading')}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({ wrap: { flex: 1, alignItems: 'center', justifyContent: 'center' } });
