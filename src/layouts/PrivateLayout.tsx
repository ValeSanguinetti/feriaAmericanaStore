import { Outlet, useLocation } from 'react-router-dom'
import { SiteHeader } from '../components/navigation/SiteHeader'
import { SiteFooter } from '../components/shared/SiteFooter'
import { useRouteMeta } from '../hooks/useRouteMeta'

export function PrivateLayout() {
  const { key } = useRouteMeta()
  const location = useLocation()
  const isProfileRoute = location.pathname.startsWith('/profile')

  return (
    <div
      className={
        isProfileRoute
          ? 'flex min-h-svh flex-col bg-[#fff8f7] text-[#241919]'
          : 'flex min-h-svh flex-col bg-[linear-gradient(180deg,#f8f3ee_0%,#fcf9f8_18%)]'
      }
    >
      {isProfileRoute ? null : <SiteHeader routeKey={key} variant="private" />}
      <Outlet />
      {isProfileRoute ? null : <SiteFooter />}
    </div>
  )
}
