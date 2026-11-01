import type { ReactNode } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { MIN_TOUCH_TARGET, useTheme } from '@/theme';

import { AppIcon } from './AppIcon';
import { AppText } from './AppText';

interface Props {
  checked: boolean;
  onChange: (value: boolean) => void;
  /** Spoken label for the checkbox itself. */
  accessibilityLabel: string;
  /** Visible label; may contain links. */
  children: ReactNode;
  error?: string;
}

export function AppCheckbox({ checked, onChange, accessibilityLabel, children, error }: Props) {
  const { colors, radius, spacing } = useTheme();

  return (
    <View style={{ gap: spacing.xs }}>
      <View style={[styles.row, { gap: spacing.xs }]}>
        <Pressable
          accessibilityRole="checkbox"
          accessibilityLabel={accessibilityLabel}
          accessibilityState={{ checked }}
          onPress={() => onChange(!checked)}
          style={styles.touch}
        >
          <View
            style={{
              width: 22,
              height: 22,
              borderRadius: radius.sm / 2,
              borderWidth: 1.5,
              borderColor: error ? colors.error : checked ? colors.primary : colors.textSecondary,
              backgroundColor: checked ? colors.primary : 'transparent',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {checked ? <AppIcon name="check" size={14} color={colors.primaryContrast} /> : null}
          </View>
        </Pressable>
        <View style={styles.flex}>{children}</View>
      </View>
      {error ? (
        <AppText variant="caption" tone="error">
          {error}
        </AppText>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center' },
  flex: { flex: 1 },
  touch: { width: MIN_TOUCH_TARGET, height: MIN_TOUCH_TARGET, alignItems: 'center', justifyContent: 'center' },
});
