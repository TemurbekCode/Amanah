import type { ReactNode } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTheme } from '@/theme';

interface Props {
  children: ReactNode;
  scroll?: boolean;
}

/** Safe-area, keyboard and theme aware screen container. */
export function Screen({ children, scroll = true }: Props) {
  const { colors, spacing } = useTheme();
  const padding = { padding: spacing.lg, gap: spacing.lg };

  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={[styles.flex, { backgroundColor: colors.background }]}
    >
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {scroll ? (
          <ScrollView
            contentContainerStyle={padding}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            {children}
          </ScrollView>
        ) : (
          <View style={[styles.flex, padding]}>{children}</View>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ flex: { flex: 1 } });
