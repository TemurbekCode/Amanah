import { View } from 'react-native';

import { useTheme } from '@/theme';

interface Props {
  /** 0 to 1 */
  value: number;
  tone?: 'primary' | 'success' | 'warning' | 'error';
  height?: number;
}

export function ProgressBar({ value, tone = 'primary', height = 8 }: Props) {
  const { colors, radius } = useTheme();
  const clamped = Math.min(1, Math.max(0, value));

  return (
    <View
      accessibilityRole="progressbar"
      accessibilityValue={{ min: 0, max: 100, now: Math.round(clamped * 100) }}
      style={{ height, borderRadius: radius.pill, backgroundColor: colors.border, overflow: 'hidden' }}
    >
      <View
        style={{
          width: `${clamped * 100}%`,
          height: '100%',
          borderRadius: radius.pill,
          backgroundColor: colors[tone],
        }}
      />
    </View>
  );
}
