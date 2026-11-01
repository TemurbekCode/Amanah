import { useRouter } from 'expo-router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';

import {
  AppButton,
  AppCheckbox,
  AppInput,
  AppText,
  PreviewNotice,
  TextLink,
} from '@/components/common';
import { AuthLayout } from '@/features/auth/components/AuthLayout';
import { useTouched } from '@/features/auth/hooks/useTouched';
import { hasErrors, validators, type FieldError } from '@/features/auth/validation';
import { useTheme } from '@/theme';

type Field = 'email' | 'password';

export default function LoginScreen() {
  const { t } = useTranslation();
  const router = useRouter();
  const { spacing } = useTheme();
  const form = useTouched<Field>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const errors: Record<Field, FieldError> = {
    email: validators.email(email),
    password: validators.currentPassword(password),
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
    <AuthLayout title={t('auth.signInTitle')} subtitle={t('auth.signInSubtitle')}>
      <PreviewNotice message={t('auth.previewNotice')} />

      <View style={{ gap: spacing.lg }}>
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
        <AppInput
          label={t('auth.password')}
          value={password}
          onChangeText={setPassword}
          onBlur={() => form.touch('password')}
          error={message('password')}
          secureTextEntry
          autoCapitalize="none"
          autoComplete="current-password"
          textContentType="password"
          returnKeyType="done"
          onSubmitEditing={onSubmit}
        />
        <View style={styles.row}>
          <View style={styles.flex}>
            <AppCheckbox
              checked={remember}
              onChange={setRemember}
              accessibilityLabel={t('auth.rememberMe')}
            >
              <AppText variant="label" onPress={() => setRemember(!remember)}>
                {t('auth.rememberMe')}
              </AppText>
            </AppCheckbox>
          </View>
          <TextLink label={t('auth.forgotPassword')} onPress={() => router.push('/auth/forgot-password')} />
        </View>
      </View>

      <AppButton title={t('auth.signIn')} onPress={onSubmit} />

      <View style={styles.center}>
        <AppText variant="caption" tone="secondary">
          {t('auth.noAccount')}
        </AppText>
        <TextLink label={t('auth.createLink')} onPress={() => router.replace('/auth/register')} />
      </View>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 8 },
  flex: { flex: 1 },
  center: { alignItems: 'center' },
});
