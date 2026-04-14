import { Outlet } from 'react-router-dom'
import { SiteHeader } from '../components/navigation/SiteHeader'
import { SiteFooter } from '../components/shared/SiteFooter'
import { useRouteMeta } from '../hooks/useRouteMeta'

export function PublicLayout() {
  const { key } = useRouteMeta()

  return (
    <div className="flex min-h-svh flex-col bg-[linear-gradient(180deg,#f8f3ee_0%,#fcf9f8_22%)]">
      <SiteHeader routeKey={key} variant="public" />
      <Outlet />
      <SiteFooter showSocialLinks={key === 'landing'} />
    </div>
  )
}
