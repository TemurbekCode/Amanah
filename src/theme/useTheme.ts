import { useMemo } from 'react';
import { useColorScheme } from 'react-native';

import { useSettingsStore } from '@/store/settingsStore';
import type { ResolvedScheme } from '@/types';

import { darkColors, lightColors } from './colors';
import { radius } from './radius';
import { shadows } from './shadows';
import { spacing } from './spacing';
import { typography } from './typography';

export function useTheme() {
  const systemScheme = useColorScheme();
  const preference = useSettingsStore((s) => s.themePreference);

  const scheme: ResolvedScheme =
    preference === 'system' ? (systemScheme === 'dark' ? 'dark' : 'light') : preference;

  return useMemo(
    () => ({
      scheme,
      isDark: scheme === 'dark',
      colors: scheme === 'dark' ? darkColors : lightColors,
      spacing,
      radius,
      typography,
      shadows,
    }),
    [scheme],
  );
}
