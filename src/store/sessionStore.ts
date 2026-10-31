import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { preferencesStorage } from '@/services/storage';
import type { AppUser, UserRole } from '@/types';

interface SessionState {
  /** In-memory only until real authentication exists (Phase 4). */
  currentUser: AppUser | null;
  role: UserRole | null;
  selectedFamilyId: string | null;
  selectedDeviceId: string | null;
  setCurrentUser: (user: AppUser | null) => void;
  setRole: (role: UserRole | null) => void;
  selectFamily: (familyId: string | null) => void;
  selectDevice: (deviceId: string | null) => void;
  reset: () => void;
}

const initial = {
  currentUser: null,
  role: null,
  selectedFamilyId: null,
  selectedDeviceId: null,
} satisfies Pick<SessionState, 'currentUser' | 'role' | 'selectedFamilyId' | 'selectedDeviceId'>;

export const useSessionStore = create<SessionState>()(
  persist(
    (set) => ({
      ...initial,
      setCurrentUser: (currentUser) => set({ currentUser }),
      setRole: (role) => set({ role }),
      selectFamily: (selectedFamilyId) => set({ selectedFamilyId }),
      selectDevice: (selectedDeviceId) => set({ selectedDeviceId }),
      reset: () => set(initial),
    }),
    {
      name: 'amanah.session',
      storage: preferencesStorage,
      // The user object is intentionally not persisted.
      partialize: (state) => ({
        role: state.role,
        selectedFamilyId: state.selectedFamilyId,
        selectedDeviceId: state.selectedDeviceId,
      }),
    },
  ),
);
