import { Routes, Route } from 'react-router-dom'
import AuthenticationPage from './pages/AuthenticationPage'
import RegistrationFinalStepPage from './pages/RegistrationFinalStepPage'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthenticationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/registration-final-step" element={<RegistrationFinalStepPage />} />
    </Routes>
  )
}

export default App
