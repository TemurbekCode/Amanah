import { Pressable } from 'react-native';

import { MIN_TOUCH_TARGET } from '@/theme';

import { AppText } from './AppText';

interface Props {
  label: string;
  onPress: () => void;
  tone?: 'primary' | 'secondary';
}

export function TextLink({ label, onPress, tone = 'primary' }: Props) {
  return (
    <Pressable
      accessibilityRole="link"
      accessibilityLabel={label}
      onPress={onPress}
      style={({ pressed }) => ({
        minHeight: MIN_TOUCH_TARGET,
        justifyContent: 'center',
        opacity: pressed ? 0.7 : 1,
      })}
    >
      <AppText variant="label" tone={tone}>
        {label}
      </AppText>
    </Pressable>
  );
}
