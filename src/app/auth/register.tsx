import { useRouter } from 'expo-router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { AppButton, AppInput, AppText, PreviewNotice, TextLink } from '@/components/common';
import { AuthLayout } from '@/features/auth/components/AuthLayout';
import { PasswordStrength } from '@/features/auth/components/PasswordStrength';
import { TermsConsent } from '@/features/auth/components/TermsConsent';
import { useTouched } from '@/features/auth/hooks/useTouched';
import { hasErrors, validators, type FieldError } from '@/features/auth/validation';
import { useTheme } from '@/theme';

type Field = 'name' | 'email' | 'password' | 'confirm' | 'terms';

export default function RegisterScreen() {
  const { t } = useTranslation();
  const router = useRouter();
  const { spacing } = useTheme();
  const form = useTouched<Field>();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [accepted, setAccepted] = useState(false);

  const errors: Record<Field, FieldError> = {
    name: validators.name(name),
    email: validators.email(email),
    password: validators.newPassword(password),
    confirm: validators.confirmPassword(password, confirm),
    terms: accepted ? null : 'errors.termsRequired',
  };

  const message = (field: Field): string | undefined => {
    const key = errors[field];
    return form.show(field) && key ? t(key) : undefined;
  };

  const onSubmit = () => {
    form.submit();
    if (hasErrors(errors)) return;
    router.push('/auth/role');
  };

  return (
    <AuthLayout title={t('auth.createAccountTitle')} subtitle={t('auth.createAccountSubtitle')}>
      <PreviewNotice message={t('auth.previewNotice')} />

      <View style={{ gap: spacing.lg }}>
        <AppInput
          label={t('auth.fullName')}
          placeholder={t('auth.fullNamePlaceholder')}
          value={name}
          onChangeText={setName}
          onBlur={() => form.touch('name')}
          error={message('name')}
          autoCapitalize="words"
          autoComplete="name"
          textContentType="name"
          returnKeyType="next"
        />
        <AppInput
          label={t('auth.email')}
          placeholder={t('auth.emailPlaceholder')}
          value={email}
          onChangeText={setEmail}
          onBlur={() => form.touch('email')}
          error={message('email')}
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="email"
          keyboardType="email-address"
          textContentType="emailAddress"
          returnKeyType="next"
        />
        <View style={{ gap: spacing.sm }}>
          <AppInput
            label={t('auth.password')}
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
        <TermsConsent
          checked={accepted}
          onChange={(value) => {
            setAccepted(value);
            form.touch('terms');
          }}
          error={message('terms')}
        />
      </View>

      <AppButton title={t('auth.createAccount')} onPress={onSubmit} />

      <View style={{ alignItems: 'center' }}>
        <AppText variant="caption" tone="secondary">
          {t('auth.haveAccount')}
        </AppText>
        <TextLink label={t('auth.signIn')} onPress={() => router.replace('/auth/login')} />
      </View>
    </AuthLayout>
  );
}
