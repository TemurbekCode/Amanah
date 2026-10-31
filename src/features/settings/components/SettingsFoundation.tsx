import { useRouter } from 'expo-router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  AppButton,
  AppCard,
  AppHeader,
  AppModal,
  Screen,
  SectionHeader,
  SegmentedControl,
} from '@/components/common';
import { useSessionStore } from '@/store/sessionStore';
import { useSettingsStore } from '@/store/settingsStore';
import type { AppLanguage, ThemePreference } from '@/types';

/** Phase 1 settings: appearance, language and a development role switch. */
export function SettingsFoundation() {
  const { t } = useTranslation();
  const router = useRouter();
  const themePreference = useSettingsStore((s) => s.themePreference);
  const setThemePreference = useSettingsStore((s) => s.setThemePreference);
  const language = useSettingsStore((s) => s.language);
  const setLanguage = useSettingsStore((s) => s.setLanguage);
  const setRole = useSessionStore((s) => s.setRole);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const themeOptions: { value: ThemePreference; label: string }[] = [
    { value: 'light', label: t('theme.light') },
    { value: 'dark', label: t('theme.dark') },
    { value: 'system', label: t('theme.system') },
  ];
  const languageOptions: { value: AppLanguage; label: string }[] = [
    { value: 'en', label: t('language.en') },
    { value: 'uz', label: t('language.uz') },
  ];

  const switchRole = () => {
    setConfirmOpen(false);
    setRole(null);
    router.replace('/');
  };

  return (
    <Screen>
      <AppHeader title={t('settings.title')} />

      <AppCard>
        <SectionHeader
          title={t('settings.appearance')}
          description={t('settings.appearanceDescription')}
        />
        <SegmentedControl options={themeOptions} value={themePreference} onChange={setThemePreference} />
      </AppCard>

      <AppCard>
        <SectionHeader
          title={t('settings.language')}
          description={t('settings.languageDescription')}
        />
        <SegmentedControl options={languageOptions} value={language} onChange={setLanguage} />
      </AppCard>

      <AppCard>
        <SectionHeader title={t('settings.developer')} />
        <AppButton
          title={t('settings.switchRole')}
          icon="repeat"
          variant="secondary"
          onPress={() => setConfirmOpen(true)}
        />
      </AppCard>

      <AppModal
        visible={confirmOpen}
        title={t('settings.switchRoleTitle')}
        message={t('settings.switchRoleMessage')}
        confirmLabel={t('common.confirm')}
        cancelLabel={t('common.cancel')}
        onConfirm={switchRole}
        onCancel={() => setConfirmOpen(false)}
      />
    </Screen>
  );
}
