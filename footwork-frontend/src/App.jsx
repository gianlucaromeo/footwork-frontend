import { Routes, Route, Navigate } from 'react-router-dom'
import AuthenticationPage from './pages/AuthenticationPage'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import AdminHomePage from './pages/AdminHomePage'
import StudentHomePage from './pages/StudentHomePage'
import VerifyEmailPage from './pages/VerifyEmailPage'

import currentUserService from './services/currentUser'

const ProtectedRouteStudent = ({ element, redirectTo }) => {
  const isAdminLoggedIn = currentUserService.getRole() === 'admin'
  if (isAdminLoggedIn) {
    return <Navigate to="/admin/home" />;
  }

  const isStudentLoggedIn = currentUserService.getRole() === 'student'
  return isStudentLoggedIn ? element : <Navigate to={redirectTo} />;
}

const ProtectedRouteAdmin = ({ element, redirectTo }) => {
  const isStudentLoggedIn = currentUserService.getRole() === 'student'
  if (isStudentLoggedIn) {
    return <Navigate to="/student/home" />;
  } 

  const isAdminLoggedIn = currentUserService.getRole() === 'admin'
  return isAdminLoggedIn ? element : <Navigate to={redirectTo} />;
}

const ProtectedRouteLogin = ({ element }) => {
  const isStudentLoggedIn = currentUserService.getRole() === 'student'
  if (isStudentLoggedIn) {
    return <Navigate to="/student/home" />;
  }

  const isAdminLoggedIn = currentUserService.getRole() === 'admin'
  return isAdminLoggedIn ? <Navigate to="/admin/home" /> : element;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthenticationPage />} />
      <Route path="/login" element={<ProtectedRouteLogin element={<LoginPage />} />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/verify" element={<VerifyEmailPage />} />

      {/* Protect these routes with ProtectedRoute */}
      <Route path="/admin/home" element={<ProtectedRouteAdmin element={<AdminHomePage />} redirectTo="/login" />} />
      <Route path="/student/home" element={<ProtectedRouteStudent element={<StudentHomePage />} redirectTo="/login" />} />
    </Routes>
  )
}

export default App
