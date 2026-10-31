import { Pressable, StyleSheet, View } from 'react-native';

import { MIN_TOUCH_TARGET, useTheme } from '@/theme';

import { AppText } from './AppText';

interface Option<T extends string> {
  value: T;
  label: string;
}

interface Props<T extends string> {
  options: readonly Option<T>[];
  value: T;
  onChange: (value: T) => void;
}

export function SegmentedControl<T extends string>({ options, value, onChange }: Props<T>) {
  const { colors, radius } = useTheme();

  return (
    <View
      accessibilityRole="radiogroup"
      style={[
        styles.row,
        { backgroundColor: colors.background, borderColor: colors.border, borderRadius: radius.md },
      ]}
    >
      {options.map((option) => {
        const selected = option.value === value;
        return (
          <Pressable
            key={option.value}
            accessibilityRole="radio"
            accessibilityState={{ selected }}
            accessibilityLabel={option.label}
            onPress={() => onChange(option.value)}
            style={({ pressed }) => [
              styles.item,
              {
                borderRadius: radius.sm,
                backgroundColor: selected ? colors.primary : 'transparent',
                opacity: pressed ? 0.85 : 1,
              },
            ]}
          >
            <AppText
              variant="label"
              style={{ color: selected ? colors.primaryContrast : colors.textSecondary }}
            >
              {option.label}
            </AppText>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', borderWidth: 1, padding: 3, gap: 3 },
  item: { flex: 1, minHeight: MIN_TOUCH_TARGET - 4, alignItems: 'center', justifyContent: 'center' },
});
