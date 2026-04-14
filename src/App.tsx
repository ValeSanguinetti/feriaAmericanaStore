import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppInitializer } from './AppInitializer'
import { AppLoading } from './components/ui/AppLoading'
import { AppRouter } from './routes/router'
import { SessionProvider } from './store/session'

function App() {
  return (
    <SessionProvider>
      <BrowserRouter>
        <AppInitializer>
          <Suspense fallback={<AppLoading />}>
            <AppRouter />
          </Suspense>
        </AppInitializer>
      </BrowserRouter>
    </SessionProvider>
  )
}

export default App
