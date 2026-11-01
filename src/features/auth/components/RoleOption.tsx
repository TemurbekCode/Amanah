import { Pressable, StyleSheet, View } from 'react-native';

import { AppIcon, AppText, type IconName } from '@/components/common';
import { useTheme } from '@/theme';

interface Props {
  icon: IconName;
  title: string;
  description: string;
  selected: boolean;
  onPress: () => void;
}

export function RoleOption({ icon, title, description, selected, onPress }: Props) {
  const { colors, radius, spacing } = useTheme();

  return (
    <Pressable
      accessibilityRole="radio"
      accessibilityLabel={title}
      accessibilityState={{ selected }}
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        {
          backgroundColor: selected ? colors.primarySoft : colors.surface,
          borderColor: selected ? colors.primary : colors.border,
          borderWidth: selected ? 1.5 : 1,
          borderRadius: radius.lg,
          padding: spacing.lg,
          gap: spacing.md,
          opacity: pressed ? 0.9 : 1,
        },
      ]}
    >
      <View style={styles.top}>
        <View
          style={{
            width: 44,
            height: 44,
            borderRadius: radius.md,
            backgroundColor: selected ? colors.primary : colors.primarySoft,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <AppIcon name={icon} size={22} color={selected ? colors.primaryContrast : colors.primary} />
        </View>
        <AppIcon
          name={selected ? 'check-circle' : 'circle'}
          size={22}
          color={selected ? colors.primary : colors.border}
        />
      </View>
      <View style={{ gap: spacing.xs }}>
        <AppText variant="subheading">{title}</AppText>
        <AppText tone="secondary">{description}</AppText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { width: '100%' },
  top: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
});
