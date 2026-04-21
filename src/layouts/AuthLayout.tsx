import { Outlet, useLocation } from 'react-router-dom'
import { SiteFooter } from '../components/shared/SiteFooter'

export function AuthLayout() {
  const location = useLocation()
  const isAuthStitchRoute =
    location.pathname.startsWith('/login') || location.pathname.startsWith('/register')
  const shellClassName = isAuthStitchRoute
    ? 'min-h-svh bg-[#fff8f7] text-[#241919]'
    : 'min-h-svh'

  return (
    <div className={`${shellClassName} flex min-h-svh flex-col`}>
      <Outlet />
      {isAuthStitchRoute ? null : <SiteFooter />}
    </div>
  )
}
