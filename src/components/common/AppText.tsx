import { Text, type TextProps } from 'react-native';

import { useTheme, type TextVariant } from '@/theme';

type Tone = 'default' | 'secondary' | 'primary' | 'error' | 'success' | 'warning';

interface Props extends TextProps {
  variant?: TextVariant;
  tone?: Tone;
}

export function AppText({ variant = 'body', tone = 'default', style, ...rest }: Props) {
  const { colors, typography } = useTheme();
  const color = {
    default: colors.text,
    secondary: colors.textSecondary,
    primary: colors.primary,
    error: colors.error,
    success: colors.success,
    warning: colors.warning,
  }[tone];

  return <Text {...rest} style={[typography[variant], { color }, style]} />;
}
