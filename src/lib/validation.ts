export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateRequired(value: string, message: string) {
  return value.trim() ? '' : message
}

export function validateEmail(value: string) {
  if (!value.trim()) {
    return 'Ingresa tu correo electrónico.'
  }

  return emailPattern.test(value) ? '' : 'Usa un correo electrónico válido.'
}

export function validatePassword(value: string) {
  if (!value) {
    return 'Crea una contraseña.'
  }

  return value.length >= 8 ? '' : 'La contraseña debe tener al menos 8 caracteres.'
}

export function validateLoginPassword(value: string) {
  return value ? '' : 'Ingresa tu contraseña.'
}
