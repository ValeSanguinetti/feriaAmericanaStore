import { Link } from 'react-router-dom'
import {
  isNavigationItemActive,
  primaryNavigationItems,
  privateNavigationItems,
  type AppRouteKey,
  type NavigationItem,
} from '../../lib/navigation'
import { cx } from '../../lib/ui'

type SiteHeaderProps = {
  routeKey: AppRouteKey
  variant: 'private' | 'public'
}

function NavigationLinks({
  items,
  routeKey,
}: {
  items: NavigationItem[]
  routeKey: AppRouteKey
}) {
  return (
    <>
      {items.map((item) => {
        const isActive = isNavigationItemActive(routeKey, item)

        return (
          <Link
            key={`${item.label}-${item.to}`}
            className={cx(
              'font-medium no-underline transition-colors',
              isActive
                ? 'border-b-2 border-[#d7a943] pb-1 text-headline'
                : 'text-text-muted hover:text-headline',
            )}
            to={item.to}
          >
            {item.label}
          </Link>
        )
      })}
    </>
  )
}

export function SiteHeader({ routeKey, variant }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-black/10 bg-background/85 backdrop-blur">
      <div className="mx-auto flex min-h-20 w-full max-w-[1440px] flex-wrap items-center justify-between gap-4 px-5 md:px-8">
        <div className="flex items-center gap-8 lg:gap-12">
          <Link
            className="font-headline text-[1.8rem] font-extrabold tracking-[-0.05em] text-headline no-underline"
            to="/"
          >
            L&apos;ATELIER
          </Link>
          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            <NavigationLinks items={primaryNavigationItems} routeKey={routeKey} />
          </nav>
        </div>

        {variant === 'public' ? (
          <div className="flex flex-wrap items-center gap-3">
            {routeKey === 'catalog' ? (
              <label className="relative hidden lg:inline-flex lg:items-center">
                <span className="absolute left-4 text-[0.82rem] text-text-muted/75">
                  Buscar
                </span>
                <input
                  className="w-60 rounded-xl border-0 bg-surface-muted px-4 py-3 pl-16"
                  placeholder="Buscar en catálogo..."
                  type="text"
                />
              </label>
            ) : null}

            <button
              aria-label="Bolso de compras"
              className="inline-flex min-h-10 items-center justify-center border-0 bg-transparent px-3 py-2 text-[0.84rem] font-semibold text-text"
              type="button"
            >
              Bolso
            </button>

            {routeKey === 'landing' ? (
              <>
                <span className="h-4 w-px bg-black/15" />
                <Link
                  className="font-semibold text-accent underline decoration-accent/35 underline-offset-4"
                  to="/login"
                >
                  Iniciar sesión
                </Link>
                <Link
                  className="inline-flex items-center justify-center rounded-xl bg-accent-strong px-4 py-3 text-sm font-semibold text-[#fffaf4] no-underline"
                  to="/register"
                >
                  Crear cuenta
                </Link>
              </>
            ) : (
              <Link
                className="inline-flex min-h-10 items-center justify-center px-3 py-2 text-[0.84rem] font-semibold text-text no-underline"
                to="/profile"
              >
                Cuenta
              </Link>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <NavigationLinks items={privateNavigationItems} routeKey={routeKey} />
          </div>
        )}
      </div>
    </header>
  )
}
