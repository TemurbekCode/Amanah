/** Validators return a translation key when invalid, or null when valid. */
export type FieldError = string | null;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const validators = {
  name: (value: string): FieldError => (value.trim() === '' ? 'errors.nameRequired' : null),

  email: (value: string): FieldError => {
    if (value.trim() === '') return 'errors.emailRequired';
    return EMAIL_PATTERN.test(value.trim()) ? null : 'errors.emailInvalid';
  },

  newPassword: (value: string): FieldError => {
    if (value === '') return 'errors.passwordRequired';
    if (value.length < 8) return 'errors.passwordShort';
    return /[A-Za-z]/.test(value) && /\d/.test(value) ? null : 'errors.passwordWeak';
  },

  currentPassword: (value: string): FieldError => (value === '' ? 'errors.passwordRequired' : null),

  confirmPassword: (password: string, value: string): FieldError => {
    if (value === '') return 'errors.confirmRequired';
    return value === password ? null : 'errors.confirmMismatch';
  },
};

export const hasErrors = (errors: Record<string, FieldError>): boolean =>
  Object.values(errors).some((error) => error !== null);

/** 0 = empty, 1 = weak, 2 = fair, 3 = strong. */
export function passwordStrength(value: string): 0 | 1 | 2 | 3 {
  if (value === '') return 0;
  let score = 0;
  if (value.length >= 8) score += 1;
  if (/[A-Za-z]/.test(value) && /\d/.test(value)) score += 1;
  if (value.length >= 12 || /[^A-Za-z0-9]/.test(value) || (/[a-z]/.test(value) && /[A-Z]/.test(value))) {
    score += 1;
  }
  return Math.max(1, score) as 1 | 2 | 3;
}
