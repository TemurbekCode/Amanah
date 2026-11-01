import type { ReactNode } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { MIN_TOUCH_TARGET, useTheme } from '@/theme';

import { AppIcon, type IconName } from './AppIcon';
import { AppText } from './AppText';

interface Props {
  icon: IconName;
  title: string;
  description?: string;
  value?: string;
  onPress?: () => void;
  right?: ReactNode;
  selected?: boolean;
  destructive?: boolean;
  disabled?: boolean;
}

/** Row used in settings lists and single-choice lists. */
export function SettingsItem({
  icon,
  title,
  description,
  value,
  onPress,
  right,
  selected,
  destructive = false,
  disabled = false,
}: Props) {
  const { colors, radius, spacing } = useTheme();
  const accent = destructive ? colors.error : colors.primary;

  const content = (
    <View style={[styles.row, { gap: spacing.md, minHeight: MIN_TOUCH_TARGET + 12 }]}>
      <View
        style={{
          width: 36,
          height: 36,
          borderRadius: radius.md,
          backgroundColor: destructive ? colors.errorSoft : colors.primarySoft,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <AppIcon name={icon} size={18} color={accent} />
      </View>
      <View style={styles.flex}>
        <AppText variant="subheading" tone={destructive ? 'error' : 'default'}>
          {title}
        </AppText>
        {description ? (
          <AppText variant="caption" tone="secondary">
            {description}
          </AppText>
        ) : null}
      </View>
      {value ? (
        <AppText variant="body" tone="secondary">
          {value}
        </AppText>
      ) : null}
      {right}
      {selected ? <AppIcon name="check-circle" size={20} color={colors.primary} /> : null}
      {onPress && !right && selected === undefined ? (
        <AppIcon name="chevron-right" size={18} color={colors.textSecondary} />
      ) : null}
    </View>
  );

  const container = {
    backgroundColor: colors.surface,
    borderColor: selected ? colors.primary : colors.border,
    borderWidth: selected ? 1.5 : 1,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xs,
    opacity: disabled ? 0.5 : 1,
  };

  if (!onPress) return <View style={container}>{content}</View>;

  return (
    <Pressable
      accessibilityRole={selected === undefined ? 'button' : 'radio'}
      accessibilityLabel={title}
      accessibilityState={{ selected: selected === true, disabled }}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [container, { opacity: disabled ? 0.5 : pressed ? 0.85 : 1 }]}
    >
      {content}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center' },
  flex: { flex: 1 },
});
