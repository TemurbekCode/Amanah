import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { lightColors } from '@/theme/colors';

/**
 * First frame shown on the server and on the first client render.
 * Deliberately independent of persisted theme, language and device settings,
 * so server and client output match exactly. Contains no text.
 */
export function BootSplash() {
  return (
    <View style={[styles.wrap, { backgroundColor: lightColors.background }]}>
      <ActivityIndicator color={lightColors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({ wrap: { flex: 1, alignItems: 'center', justifyContent: 'center' } });
