/** Public (client-safe) configuration. Never put service-role keys here. */
export const config = {
  supabaseUrl: process.env.EXPO_PUBLIC_SUPABASE_URL ?? '',
  supabaseAnonKey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? '',
} as const;

export const isBackendConfigured = config.supabaseUrl !== '' && config.supabaseAnonKey !== '';
