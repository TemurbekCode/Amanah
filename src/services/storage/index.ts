import AsyncStorage from '@react-native-async-storage/async-storage';
import { createJSONStorage, type StateStorage } from 'zustand/middleware';

/** Used while rendering on the server (static web export), where no storage exists. */
const noopStorage: StateStorage = {
  getItem: () => null,
  setItem: () => undefined,
  removeItem: () => undefined,
};

const isServer = typeof window === 'undefined';

/**
 * Storage for NON-sensitive preferences only (theme, language, selected ids).
 * Auth tokens must go in expo-secure-store when authentication is added (Phase 4).
 */
export const preferencesStorage = createJSONStorage(() => (isServer ? noopStorage : AsyncStorage));
