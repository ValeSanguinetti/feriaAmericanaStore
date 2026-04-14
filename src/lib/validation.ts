export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateRequired(value: string, message: string) {
  return value.trim() ? '' : message
}

export function validateEmail(value: string) {
  if (!value.trim()) {
    return 'Enter your email address.'
  }

  return emailPattern.test(value) ? '' : 'Use a valid email address.'
}

export function validatePassword(value: string) {
  if (!value) {
    return 'Create a password.'
  }

  return value.length >= 8 ? '' : 'Password must be at least 8 characters.'
}

export function validateLoginPassword(value: string) {
  return value ? '' : 'Enter your password.'
}
