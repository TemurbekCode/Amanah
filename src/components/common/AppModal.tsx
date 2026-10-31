import type { ReactNode } from 'react';
import { Modal, Pressable, StyleSheet, View } from 'react-native';

import { useTheme } from '@/theme';

import { AppButton } from './AppButton';
import { AppText } from './AppText';

interface Props {
  visible: boolean;
  title: string;
  message?: string;
  confirmLabel: string;
  cancelLabel: string;
  onConfirm: () => void;
  onCancel: () => void;
  destructive?: boolean;
  children?: ReactNode;
}

export function AppModal({
  visible,
  title,
  message,
  confirmLabel,
  cancelLabel,
  onConfirm,
  onCancel,
  destructive = false,
  children,
}: Props) {
  const { colors, radius, spacing, shadows } = useTheme();

  return (
    <Modal transparent animationType="fade" visible={visible} onRequestClose={onCancel}>
      <Pressable
        accessibilityLabel={cancelLabel}
        onPress={onCancel}
        style={[styles.backdrop, { backgroundColor: colors.overlay, padding: spacing.xl }]}
      >
        <Pressable
          accessible={false}
          style={[
            {
              backgroundColor: colors.surfaceElevated,
              borderRadius: radius.lg,
              padding: spacing.xl,
              gap: spacing.lg,
              borderColor: colors.border,
              borderWidth: 1,
            },
            shadows.md,
          ]}
        >
          <View style={{ gap: spacing.sm }}>
            <AppText variant="heading" accessibilityRole="header">
              {title}
            </AppText>
            {message ? (
              <AppText variant="body" tone="secondary">
                {message}
              </AppText>
            ) : null}
          </View>
          {children}
          <View style={{ gap: spacing.sm }}>
            <AppButton
              title={confirmLabel}
              variant={destructive ? 'danger' : 'primary'}
              onPress={onConfirm}
            />
            <AppButton title={cancelLabel} variant="ghost" onPress={onCancel} />
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({ backdrop: { flex: 1, justifyContent: 'center' } });
