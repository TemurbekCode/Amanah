import { View } from 'react-native';

import { useTheme } from '@/theme';

import { AppIcon } from './AppIcon';
import { AppText } from './AppText';

/** Banner that marks a screen or flow as UI preview only. */
export function PreviewNotice({ message }: { message: string }) {
  const { colors, radius, spacing } = useTheme();

  return (
    <View
      accessibilityRole="alert"
      style={{
        flexDirection: 'row',
        gap: spacing.md,
        padding: spacing.md,
        borderRadius: radius.md,
        backgroundColor: colors.infoSoft,
        alignItems: 'flex-start',
      }}
    >
      <AppIcon name="info" size={18} color={colors.info} />
      <AppText variant="caption" style={{ flex: 1, color: colors.info }}>
        {message}
      </AppText>
    </View>
  );
}
