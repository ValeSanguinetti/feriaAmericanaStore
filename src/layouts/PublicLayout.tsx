import { Outlet, useLocation } from 'react-router-dom'
import { SiteHeader } from '../components/navigation/SiteHeader'
import { SiteFooter } from '../components/shared/SiteFooter'
import { useRouteMeta } from '../hooks/useRouteMeta'

export function PublicLayout() {
  const { key } = useRouteMeta()
  const location = useLocation()
  const isStitchShellRoute =
    location.pathname === '/' ||
    location.pathname.startsWith('/catalog') ||
    location.pathname.startsWith('/product-detail') ||
    location.pathname.startsWith('/shopping-cart') ||
    location.pathname.startsWith('/wishlist')

  return (
    <div
      className={
        isStitchShellRoute
          ? 'flex min-h-svh flex-col bg-[#fff8f7] text-[#241919]'
          : 'flex min-h-svh flex-col bg-[linear-gradient(180deg,#f8f3ee_0%,#fcf9f8_22%)]'
      }
    >
      {isStitchShellRoute ? null : <SiteHeader routeKey={key} variant="public" />}
      <Outlet />
      {isStitchShellRoute ? null : <SiteFooter showSocialLinks={key === 'landing'} />}
    </div>
  )
}
