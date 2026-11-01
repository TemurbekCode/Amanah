import { useRouter } from 'expo-router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { AppButton, AppCard, AppInput, AppText, EmptyState, PreviewNotice } from '@/components/common';
import { AuthLayout } from '@/features/auth/components/AuthLayout';
import { PasswordStrength } from '@/features/auth/components/PasswordStrength';
import { useTouched } from '@/features/auth/hooks/useTouched';
import { hasErrors, validators, type FieldError } from '@/features/auth/validation';
import { useTheme } from '@/theme';

type Field = 'password' | 'confirm';

export default function ResetPasswordScreen() {
  const { t } = useTranslation();
  const router = useRouter();
  const { spacing } = useTheme();
  const form = useTouched<Field>();
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [done, setDone] = useState(false);

  const errors: Record<Field, FieldError> = {
    password: validators.newPassword(password),
    confirm: validators.confirmPassword(password, confirm),
  };

  const message = (field: Field): string | undefined => {
    const key = errors[field];
    return form.show(field) && key ? t(key) : undefined;
  };

  const onSubmit = () => {
    form.submit();
    if (!hasErrors(errors)) setDone(true);
  };

  if (done) {
    return (
      <AuthLayout title={t('auth.resetTitle')} showBack={false}>
        <AppCard>
          <EmptyState
            icon="check-circle"
            title={t('auth.resetSuccessTitle')}
            description={t('auth.resetSuccessBody')}
          />
        </AppCard>
        <PreviewNotice message={t('auth.previewNotice')} />
        <AppButton title={t('auth.continueToSignIn')} onPress={() => router.replace('/auth/login')} />
      </AuthLayout>
    );
  }

  return (
    <AuthLayout title={t('auth.resetTitle')} subtitle={t('auth.resetSubtitle')}>
      <PreviewNotice message={t('auth.previewNotice')} />
      <View style={{ gap: spacing.lg }}>
        <View style={{ gap: spacing.sm }}>
          <AppInput
            label={t('auth.newPassword')}
            value={password}
            onChangeText={setPassword}
            onBlur={() => form.touch('password')}
            error={message('password')}
            secureTextEntry
            autoCapitalize="none"
            autoComplete="new-password"
            textContentType="newPassword"
            returnKeyType="next"
          />
          <AppText variant="caption" tone="secondary">
            {t('auth.passwordHint')}
          </AppText>
          <PasswordStrength password={password} />
        </View>
        <AppInput
          label={t('auth.confirmPassword')}
          value={confirm}
          onChangeText={setConfirm}
          onBlur={() => form.touch('confirm')}
          error={message('confirm')}
          secureTextEntry
          autoCapitalize="none"
          autoComplete="new-password"
          textContentType="newPassword"
          returnKeyType="done"
          onSubmitEditing={onSubmit}
        />
      </View>
      <AppButton title={t('auth.resetButton')} onPress={onSubmit} />
    </AuthLayout>
  );
}
