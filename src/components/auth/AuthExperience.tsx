import { Outlet, useLocation } from 'react-router-dom'
import { SiteFooter } from '../shared/SiteFooter'

export function AuthExperience() {
  const location = useLocation()
  const mode = location.pathname.startsWith('/login') ? 'login' : 'register'
  const shellClassName =
    mode === 'login'
      ? 'min-h-svh bg-[radial-gradient(circle_at_top,rgba(118,85,26,0.08),transparent_22%),linear-gradient(180deg,#f8f3ee_0%,#fcf9f8_22%)]'
      : 'min-h-svh'

  return (
    <div className={shellClassName}>
      <Outlet />
      <SiteFooter />
    </div>
  )
}
