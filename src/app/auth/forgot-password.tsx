import { useRouter } from 'expo-router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import {
  AppButton,
  AppCard,
  AppInput,
  EmptyState,
  PreviewNotice,
  TextLink,
} from '@/components/common';
import { AuthLayout } from '@/features/auth/components/AuthLayout';
import { validators } from '@/features/auth/validation';
import { useTheme } from '@/theme';

export default function ForgotPasswordScreen() {
  const { t } = useTranslation();
  const router = useRouter();
  const { spacing } = useTheme();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [sent, setSent] = useState(false);

  const errorKey = validators.email(email);
  const error = submitted && errorKey ? t(errorKey) : undefined;

  const onSubmit = () => {
    setSubmitted(true);
    if (!errorKey) setSent(true);
  };

  if (sent) {
    return (
      <AuthLayout title={t('auth.forgotTitle')}>
        <AppCard>
          <EmptyState
            icon="mail"
            title={t('auth.checkEmailTitle')}
            description={t('auth.checkEmailBody', { email: email.trim() })}
          />
        </AppCard>
        <PreviewNotice message={t('auth.previewNotice')} />
        <View style={{ gap: spacing.sm }}>
          <AppButton title={t('auth.openReset')} onPress={() => router.push('/auth/reset-password')} />
          <AppButton
            title={t('auth.backToSignIn')}
            variant="ghost"
            onPress={() => router.replace('/auth/login')}
          />
        </View>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout title={t('auth.forgotTitle')} subtitle={t('auth.forgotSubtitle')}>
      <PreviewNotice message={t('auth.previewNotice')} />
      <AppInput
        label={t('auth.email')}
        placeholder={t('auth.emailPlaceholder')}
        value={email}
        onChangeText={setEmail}
        error={error}
        autoCapitalize="none"
        autoCorrect={false}
        autoComplete="email"
        keyboardType="email-address"
        textContentType="emailAddress"
        returnKeyType="done"
        onSubmitEditing={onSubmit}
      />
      <AppButton title={t('common.continue')} onPress={onSubmit} />
      <View style={{ alignItems: 'center' }}>
        <TextLink label={t('auth.backToSignIn')} onPress={() => router.replace('/auth/login')} />
      </View>
    </AuthLayout>
  );
}
