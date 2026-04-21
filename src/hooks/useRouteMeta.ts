import { useLocation } from 'react-router-dom'
import type { AppRouteKey } from '../lib/navigation'

type RouteMeta = {
  key: AppRouteKey
  layout: 'auth' | 'private' | 'public'
  title: string
}

const routeMetaList: Array<{ meta: RouteMeta; path: string }> = [
  { meta: { key: 'landing', layout: 'public', title: 'Landing' }, path: '/' },
  { meta: { key: 'catalog', layout: 'public', title: 'Catalog' }, path: '/catalog' },
  { meta: { key: 'product-detail', layout: 'public', title: 'Product Detail' }, path: '/product-detail' },
  { meta: { key: 'shopping-cart', layout: 'public', title: 'Shopping Cart' }, path: '/shopping-cart' },
  { meta: { key: 'wishlist', layout: 'public', title: 'Wishlist' }, path: '/wishlist' },
  { meta: { key: 'profile', layout: 'private', title: 'Profile' }, path: '/profile' },
  { meta: { key: 'login', layout: 'auth', title: 'Login' }, path: '/login' },
  { meta: { key: 'register', layout: 'auth', title: 'Register' }, path: '/register' },
]

export function useRouteMeta() {
  const location = useLocation()

  const current =
    routeMetaList.find((item) => item.path === location.pathname)?.meta ??
    routeMetaList[0].meta

  return current
}
