import { View } from 'react-native';

import { useTheme } from '@/theme';

import { AppText } from './AppText';

export type BadgeTone = 'neutral' | 'primary' | 'success' | 'warning' | 'error' | 'info';

interface Props {
  label: string;
  tone?: BadgeTone;
}

export function Badge({ label, tone = 'neutral' }: Props) {
  const { colors, radius, spacing } = useTheme();
  const palette = {
    neutral: { bg: colors.border, fg: colors.textSecondary },
    primary: { bg: colors.primarySoft, fg: colors.primary },
    success: { bg: colors.successSoft, fg: colors.success },
    warning: { bg: colors.warningSoft, fg: colors.warning },
    error: { bg: colors.errorSoft, fg: colors.error },
    info: { bg: colors.infoSoft, fg: colors.info },
  }[tone];

  return (
    <View
      style={{
        alignSelf: 'flex-start',
        backgroundColor: palette.bg,
        borderRadius: radius.pill,
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.xs,
      }}
    >
      <AppText variant="caption" style={{ color: palette.fg, fontWeight: '600' }}>
        {label}
      </AppText>
    </View>
  );
}
