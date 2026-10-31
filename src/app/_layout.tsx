import '@/i18n';

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { BootSplash } from '@/components/common/BootSplash';
import { useStoresHydrated } from '@/hooks/useStoresHydrated';
import { useTheme } from '@/theme';

function ThemedStack() {
  const { colors, isDark } = useTheme();
  return (
    <>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.background } }} />
    </>
  );
}

export default function RootLayout() {
  const ready = useStoresHydrated();
  // Nothing theme- or language-dependent renders until the client has mounted
  // and persisted preferences are loaded.
  return ready ? <ThemedStack /> : <BootSplash />;
}
