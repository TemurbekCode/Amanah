import { StyleSheet, View } from 'react-native';

import { useTheme } from '@/theme';

import { AppButton } from './AppButton';
import { AppIcon, type IconName } from './AppIcon';
import { AppText } from './AppText';

interface Props {
  icon: IconName;
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({ icon, title, description, actionLabel, onAction }: Props) {
  const { colors, radius, spacing } = useTheme();

  return (
    <View style={[styles.wrap, { gap: spacing.md, padding: spacing.xl }]}>
      <View
        style={{
          width: 56,
          height: 56,
          borderRadius: radius.lg,
          backgroundColor: colors.primarySoft,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <AppIcon name={icon} size={24} color={colors.primary} />
      </View>
      <AppText variant="subheading" style={styles.center}>
        {title}
      </AppText>
      {description ? (
        <AppText variant="body" tone="secondary" style={styles.center}>
          {description}
        </AppText>
      ) : null}
      {actionLabel && onAction ? <AppButton title={actionLabel} onPress={onAction} variant="secondary" /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { alignItems: 'center' },
  center: { textAlign: 'center' },
});
