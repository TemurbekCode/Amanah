import { getLocales } from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import type { AppLanguage } from '@/types';

import en from './locales/en.json';
import uz from './locales/uz.json';

export const SUPPORTED_LANGUAGES: readonly AppLanguage[] = ['en', 'uz'];

/** Device language if supported, otherwise English. */
export function detectDeviceLanguage(): AppLanguage {
  const code = getLocales()[0]?.languageCode;
  return code === 'uz' ? 'uz' : 'en';
}

if (!i18n.isInitialized) {
  void i18n.use(initReactI18next).init({
    resources: { en: { translation: en }, uz: { translation: uz } },
    lng: detectDeviceLanguage(),
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });
}

export default i18n;
