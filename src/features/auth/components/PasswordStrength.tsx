import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { AppText, ProgressBar } from '@/components/common';
import { useTheme } from '@/theme';

import { passwordStrength } from '../validation';

const TONES = { 1: 'error', 2: 'warning', 3: 'success' } as const;
const LABELS = { 1: 'auth.strength.weak', 2: 'auth.strength.fair', 3: 'auth.strength.strong' } as const;

export function PasswordStrength({ password }: { password: string }) {
  const { t } = useTranslation();
  const { spacing } = useTheme();
  const level = passwordStrength(password);

  if (level === 0) return null;

  return (
    <View style={{ gap: spacing.xs }} accessibilityLabel={t('auth.passwordStrength')}>
      <ProgressBar value={level / 3} tone={TONES[level]} height={6} />
      <AppText variant="caption" tone="secondary">
        {t('auth.passwordStrength')}: {t(LABELS[level])}
      </AppText>
    </View>
  );
}
