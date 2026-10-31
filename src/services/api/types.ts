/**
 * Service contracts for the future backend (Supabase, Phase 4).
 * No implementation exists yet. Anything returning demo data must be
 * implemented separately and clearly marked as demo.
 */
import type { AppUser, Device, Family } from '@/types';

export type ServiceResult<T> = { ok: true; data: T } | { ok: false; error: string };

export interface AuthService {
  signIn(email: string, password: string): Promise<ServiceResult<AppUser>>;
  signUp(email: string, password: string, name: string): Promise<ServiceResult<AppUser>>;
  signOut(): Promise<ServiceResult<null>>;
  resetPassword(email: string): Promise<ServiceResult<null>>;
}

export interface FamilyService {
  listFamilies(): Promise<ServiceResult<Family[]>>;
}

export interface DeviceService {
  listDevices(familyId: string): Promise<ServiceResult<Device[]>>;
  unlinkDevice(deviceId: string): Promise<ServiceResult<null>>;
}
