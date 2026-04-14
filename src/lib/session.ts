import type { SessionMode } from './auth'

export function getInitialSessionMode(): SessionMode {
  return 'disabled'
}

export function getInitialBootstrapStatus() {
  return 'idle' as const
}
