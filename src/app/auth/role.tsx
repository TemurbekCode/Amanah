import { useRouter } from 'expo-router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { AppButton } from '@/components/common';
import { AuthLayout } from '@/features/auth/components/AuthLayout';
import { RoleOption } from '@/features/auth/components/RoleOption';
import { useSessionStore } from '@/store/sessionStore';
import { useTheme } from '@/theme';
import type { UserRole } from '@/types';

export default function RoleSelectionScreen() {
  const { t } = useTranslation();
  const router = useRouter();
  const { spacing } = useTheme();
  const setRole = useSessionStore((s) => s.setRole);
  const [selected, setSelected] = useState<UserRole | null>(null);

  const onContinue = () => {
    if (!selected) return;
    setRole(selected);
    router.replace(selected === 'parent' ? '/parent' : '/child');
  };

  return (
    <AuthLayout title={t('role.title')} subtitle={t('role.subtitle')}>
      <View accessibilityRole="radiogroup" style={{ gap: spacing.md }}>
        <RoleOption
          icon="shield"
          title={t('role.parent')}
          description={t('role.parentDescription')}
          selected={selected === 'parent'}
          onPress={() => setSelected('parent')}
        />
        <RoleOption
          icon="smile"
          title={t('role.child')}
          description={t('role.childDescription')}
          selected={selected === 'child'}
          onPress={() => setSelected('child')}
        />
      </View>
      <AppButton title={t('common.continue')} disabled={selected === null} onPress={onContinue} />
    </AuthLayout>
  );
}
