export type SessionMode = 'disabled' | 'authenticated'
export type ProfileState = 'complete' | 'incomplete' | 'blocked'

export function isAuthEnabled(sessionMode: SessionMode) {
  return sessionMode === 'authenticated'
}

export function canAccessProtected(sessionMode: SessionMode, hasSession: boolean) {
  return !isAuthEnabled(sessionMode) || hasSession
}

export function canAccessPublicOnly(sessionMode: SessionMode, hasSession: boolean) {
  return !isAuthEnabled(sessionMode) || !hasSession
}

export function canAccessRole(
  sessionMode: SessionMode,
  role: string | null | undefined,
  allowedRoles: string[],
) {
  if (!isAuthEnabled(sessionMode)) {
    return true
  }

  return !!role && allowedRoles.includes(role)
}

export function canAccessProfileState(
  sessionMode: SessionMode,
  currentState: ProfileState | null | undefined,
  expectedState: ProfileState,
) {
  if (!isAuthEnabled(sessionMode)) {
    return true
  }

  return currentState === expectedState
}
