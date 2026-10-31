export type ColorTokens = {
  background: string;
  surface: string;
  surfaceElevated: string;
  primary: string;
  primaryContrast: string;
  primarySoft: string;
  text: string;
  textSecondary: string;
  border: string;
  success: string;
  successSoft: string;
  warning: string;
  warningSoft: string;
  error: string;
  errorSoft: string;
  info: string;
  infoSoft: string;
  overlay: string;
};

export const lightColors: ColorTokens = {
  background: '#F5F7FA',
  surface: '#FFFFFF',
  surfaceElevated: '#FFFFFF',
  primary: '#2563EB',
  primaryContrast: '#FFFFFF',
  primarySoft: '#E8EFFD',
  text: '#111827',
  textSecondary: '#64748B',
  border: '#E2E8F0',
  success: '#15803D',
  successSoft: '#E6F4EA',
  warning: '#B45309',
  warningSoft: '#FEF3C7',
  error: '#DC2626',
  errorSoft: '#FDE8E8',
  info: '#0369A1',
  infoSoft: '#E0F2FE',
  overlay: 'rgba(15, 23, 42, 0.45)',
};

export const darkColors: ColorTokens = {
  background: '#0B1220',
  surface: '#111827',
  surfaceElevated: '#172033',
  primary: '#60A5FA',
  primaryContrast: '#0B1220',
  primarySoft: '#16233F',
  text: '#F8FAFC',
  textSecondary: '#94A3B8',
  border: '#263244',
  success: '#4ADE80',
  successSoft: '#10281B',
  warning: '#FBBF24',
  warningSoft: '#33260A',
  error: '#F87171',
  errorSoft: '#341517',
  info: '#38BDF8',
  infoSoft: '#0C2536',
  overlay: 'rgba(0, 0, 0, 0.6)',
};
