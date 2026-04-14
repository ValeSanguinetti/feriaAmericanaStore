import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import {
  canAccessProfileState,
  canAccessProtected,
  canAccessPublicOnly,
  canAccessRole,
  type ProfileState,
} from '../lib/auth'
import { useSession } from '../store/useSession'

type GuardProps = {
  children: ReactNode
}

export function PublicRoute({ children }: GuardProps) {
  const { bootstrapStatus, sessionMode, user } = useSession()

  if (bootstrapStatus !== 'ready') {
    return null
  }

  if (!canAccessPublicOnly(sessionMode, Boolean(user))) {
    return <Navigate replace to="/profile" />
  }

  return <>{children}</>
}

export function ProtectedRoute({ children }: GuardProps) {
  const { bootstrapStatus, sessionMode, user } = useSession()

  if (bootstrapStatus !== 'ready') {
    return null
  }

  if (!canAccessProtected(sessionMode, Boolean(user))) {
    return <Navigate replace to="/login" />
  }

  return <>{children}</>
}

export function RoleRoute({
  children,
  roles,
}: GuardProps & { roles: string[] }) {
  const { bootstrapStatus, sessionMode, user } = useSession()

  if (bootstrapStatus !== 'ready') {
    return null
  }

  if (!canAccessRole(sessionMode, user?.role, roles)) {
    return <Navigate replace to="/" />
  }

  return <>{children}</>
}

export function ProfileStateRoute({
  children,
  requiredState,
}: GuardProps & { requiredState: ProfileState }) {
  const { bootstrapStatus, profile, sessionMode } = useSession()

  if (bootstrapStatus !== 'ready') {
    return null
  }

  if (!canAccessProfileState(sessionMode, profile?.state, requiredState)) {
    return <Navigate replace to="/" />
  }

  return <>{children}</>
}
