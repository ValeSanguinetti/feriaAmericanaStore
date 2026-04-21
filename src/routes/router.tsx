import { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthLayout } from '../layouts/AuthLayout'
import { PrivateLayout } from '../layouts/PrivateLayout'
import { PublicLayout } from '../layouts/PublicLayout'
import { ProtectedRoute, PublicRoute } from './guards'

const LandingPage = lazy(() => import('../pages/public/LandingPage'))
const CatalogPage = lazy(() => import('../pages/shop/CatalogPage'))
const ProductDetailPage = lazy(() => import('../pages/shop/ProductDetailPage'))
const ShoppingCartPage = lazy(() => import('../pages/shop/ShoppingCartPage'))
const WishlistPage = lazy(() => import('../pages/shop/WishlistPage'))
const ProfilePage = lazy(() => import('../pages/account/ProfilePage'))
const LoginPage = lazy(() => import('../pages/auth/LoginPage'))
const RegisterPage = lazy(() => import('../pages/auth/RegisterPage'))

export function AppRouter() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/product-detail" element={<ProductDetailPage />} />
        <Route path="/shopping-cart" element={<ShoppingCartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
      </Route>

      <Route
        element={
          <ProtectedRoute>
            <PrivateLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/profile" element={<ProfilePage />} />
      </Route>

      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}
