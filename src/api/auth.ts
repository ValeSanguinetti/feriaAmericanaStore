import { apiRequest } from './client'

export type LoginInput = {
  email: string
  password: string
}

export type RegisterInput = {
  acceptedTerms: boolean
  email: string
  name: string
  password: string
  passwordConfirmation: string
}

export const authApi = {
  getSession: () => apiRequest('/auth/session'),
  login: (payload: LoginInput) => apiRequest('/auth/login', { body: payload, method: 'POST' }),
  logout: () => apiRequest('/auth/logout', { method: 'POST' }),
  register: (payload: RegisterInput) =>
    apiRequest('/auth/register', { body: payload, method: 'POST' }),
}
