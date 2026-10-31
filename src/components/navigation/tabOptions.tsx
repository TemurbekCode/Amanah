import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import { AppIcon, type IconName } from '@/components/common/AppIcon';
import { useTheme } from '@/theme';

export function renderTabIcon(name: IconName) {
  return function TabIcon({ color, size }: { color: string; size: number }) {
    return <AppIcon name={name} size={size} color={color} />;
  };
}

/** Shared, theme-aware tab bar options for Parent and Child modes. */
export function useTabScreenOptions(): BottomTabNavigationOptions {
  const { colors } = useTheme();

  return {
    headerShown: false,
    tabBarActiveTintColor: colors.primary,
    tabBarInactiveTintColor: colors.textSecondary,
    tabBarStyle: { backgroundColor: colors.surface, borderTopColor: colors.border },
    tabBarLabelStyle: { fontSize: 11, fontWeight: '600' },
    sceneStyle: { backgroundColor: colors.background },
  };
}
