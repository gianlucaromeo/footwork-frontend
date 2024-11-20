import { Routes, Route } from 'react-router-dom'
import AuthenticationPage from './pages/AuthenticationPage'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import AdminHomePage from './pages/AdminHomePage'
import StudentHomePage from './pages/StudentHomePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthenticationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />

      <Route path="/admin/home" element={<AdminHomePage />} />

      <Route path="/student/home" element={<StudentHomePage />} />

      <Route path='/test' element={<h1>Test</h1>} />
    </Routes>
  )
}

export default App
