import { useEffect, type ReactNode } from 'react'
import { AppLoading } from './components/ui/AppLoading'
import { useSession } from './store/useSession'

export function AppInitializer({ children }: { children: ReactNode }) {
  const { bootstrap, bootstrapStatus } = useSession()

  useEffect(() => {
    void bootstrap()
  }, [bootstrap])

  if (bootstrapStatus !== 'ready') {
    return <AppLoading />
  }

  return <>{children}</>
}
