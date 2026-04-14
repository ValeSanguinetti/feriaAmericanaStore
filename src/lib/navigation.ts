export type AppRouteKey = 'landing' | 'catalog' | 'profile' | 'login' | 'register'

export type NavigationItem = {
  activeOn: AppRouteKey[]
  label: string
  to: string
}

export const primaryNavigationItems: NavigationItem[] = [
  {
    activeOn: ['catalog'],
    label: 'Collections',
    to: '/catalog',
  },
  {
    activeOn: ['landing'],
    label: 'New Arrivals',
    to: '/',
  },
  {
    activeOn: ['landing'],
    label: 'Lookbook',
    to: '/',
  },
  {
    activeOn: ['landing'],
    label: 'Archive',
    to: '/',
  },
]

export const privateNavigationItems: NavigationItem[] = [
  {
    activeOn: ['catalog'],
    label: 'Bag',
    to: '/catalog',
  },
  {
    activeOn: ['profile'],
    label: 'Profile',
    to: '/profile',
  },
]

export function isNavigationItemActive(
  routeKey: AppRouteKey,
  navigationItem: NavigationItem,
) {
  return navigationItem.activeOn.includes(routeKey)
}
