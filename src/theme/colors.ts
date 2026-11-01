export type ColorTokens = {
  background: string;
  surface: string;
  surfaceElevated: string;
  primary: string;
  primaryContrast: string;
  primarySoft: string;
  /** Deep forest green used for the logo mark and key brand elements. */
  brand: string;
  brandSoft: string;
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
  background: '#F6F8F7',
  surface: '#FFFFFF',
  surfaceElevated: '#FFFFFF',
  primary: '#047857',
  primaryContrast: '#FFFFFF',
  primarySoft: '#E3F4EC',
  brand: '#064E3B',
  brandSoft: '#E3F1EC',
  text: '#0F1F1A',
  textSecondary: '#52645D',
  border: '#DCE5E1',
  success: '#15803D',
  successSoft: '#E4F5E9',
  warning: '#B45309',
  warningSoft: '#FEF3C7',
  error: '#DC2626',
  errorSoft: '#FDE8E8',
  info: '#0369A1',
  infoSoft: '#E0F2FE',
  overlay: 'rgba(8, 20, 16, 0.45)',
};

export const darkColors: ColorTokens = {
  background: '#0A1210',
  surface: '#101916',
  surfaceElevated: '#16221E',
  primary: '#34D399',
  primaryContrast: '#04261B',
  primarySoft: '#12261F',
  brand: '#047857',
  brandSoft: '#12261F',
  text: '#F1F7F4',
  textSecondary: '#93A89F',
  border: '#243630',
  success: '#4ADE80',
  successSoft: '#0F2819',
  warning: '#FBBF24',
  warningSoft: '#33260A',
  error: '#F87171',
  errorSoft: '#341517',
  info: '#38BDF8',
  infoSoft: '#0C2536',
  overlay: 'rgba(0, 0, 0, 0.6)',
};
