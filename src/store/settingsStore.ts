import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import i18n, { detectDeviceLanguage } from '@/i18n';
import { preferencesStorage } from '@/services/storage';
import type { AppLanguage, ThemePreference } from '@/types';

interface SettingsState {
  themePreference: ThemePreference;
  language: AppLanguage;
  setThemePreference: (value: ThemePreference) => void;
  setLanguage: (value: AppLanguage) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      themePreference: 'system',
      language: detectDeviceLanguage(),
      setThemePreference: (themePreference) => set({ themePreference }),
      setLanguage: (language) => {
        void i18n.changeLanguage(language);
        set({ language });
      },
    }),
    {
      name: 'amanah.settings',
      storage: preferencesStorage,
      partialize: (state) => ({
        themePreference: state.themePreference,
        language: state.language,
      }),
      onRehydrateStorage: () => (state) => {
        if (state) void i18n.changeLanguage(state.language);
      },
    },
  ),
);
