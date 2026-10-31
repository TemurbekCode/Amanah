export type UserRole = 'parent' | 'child';
export type ThemePreference = 'light' | 'dark' | 'system';
export type ResolvedScheme = 'light' | 'dark';
export type AppLanguage = 'en' | 'uz';

export interface AppUser {
  id: string;
  name: string;
  email?: string;
  avatarUri?: string;
}

export interface Family {
  id: string;
  name: string;
}

export interface Device {
  id: string;
  name: string;
  familyId: string;
  /** True only when the device is actually paired through a real backend. */
  isDemo: boolean;
}
