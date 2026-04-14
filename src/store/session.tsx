import {
  useCallback,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { SessionMode } from '../lib/auth'
import { getInitialBootstrapStatus, getInitialSessionMode } from '../lib/session'
import {
  SessionContext,
  type BootstrapStatus,
  type SessionContextValue,
} from './session-context'

export function SessionProvider({ children }: { children: ReactNode }) {
  const [bootstrapStatus, setBootstrapStatus] = useState<BootstrapStatus>(
    getInitialBootstrapStatus(),
  )
  const [sessionMode] = useState<SessionMode>(getInitialSessionMode())
  const [user] = useState<SessionContextValue['user']>(null)
  const [profile] = useState<SessionContextValue['profile']>(null)

  const bootstrap = useCallback(async () => {
    setBootstrapStatus('bootstrapping')
    await Promise.resolve()
    setBootstrapStatus('ready')
  }, [])

  const value = useMemo<SessionContextValue>(
    () => ({
      bootstrap,
      bootstrapStatus,
      profile,
      sessionMode,
      user,
    }),
    [bootstrap, bootstrapStatus, profile, sessionMode, user],
  )

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
}
