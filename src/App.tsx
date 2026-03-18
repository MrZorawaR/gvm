import AppRoutes from './routes/AppRoutes'
import ScrollToHash from './components/utils/ScrollToHash'
import RedirectHandler from './utils/RedirectHandler'

function App() {
  return (
    <>
      <ScrollToHash />
      <RedirectHandler />
      <AppRoutes />
    </>
  )
}

export default App
