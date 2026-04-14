import { createContext } from 'react'
import type { ProfileState, SessionMode } from '../lib/auth'

export type BootstrapStatus = 'idle' | 'bootstrapping' | 'ready'

export type SessionUser = {
  email: string
  name: string
  role?: string
}

export type SessionProfile = {
  state: ProfileState
}

export type SessionContextValue = {
  bootstrapStatus: BootstrapStatus
  bootstrap: () => Promise<void>
  profile: SessionProfile | null
  sessionMode: SessionMode
  user: SessionUser | null
}

export const SessionContext = createContext<SessionContextValue | null>(null)
