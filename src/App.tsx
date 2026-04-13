import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthExperience } from './components/auth/AuthExperience'
import { HomeCatalogPage } from './components/catalog/HomeCatalogPage'
import { LandingPage } from './components/landing/LandingPage'
import { LoginPage } from './components/login/LoginPage'
import { UserProfilePage } from './components/profile/UserProfilePage'
import { RegisterPage } from './components/register/RegisterPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/catalog" element={<HomeCatalogPage />} />
      <Route path="/profile" element={<UserProfilePage />} />
      <Route element={<AuthExperience />}>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
