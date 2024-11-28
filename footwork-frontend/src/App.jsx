import { Routes, Route, Navigate } from 'react-router-dom'
import AuthenticationPage from './pages/AuthenticationPage'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import AdminHomePage from './pages/AdminHomePage'
import StudentHomePage from './pages/StudentHomePage'
import VerifyEmailPage from './pages/VerifyEmailPage'
import StudentUnverifiedPage from './pages/StudentUnverifiedPage'

import currentUserService from './services/currentUser'

const isStudentVerifiedByAdmin = () => { 
  const isStudent = currentUserService.getRole() === 'student';
  const isVerified = currentUserService.getIsVerifiedByAdmin();
  console.log('Is student:', isStudent);
  console.log('Is verified:', isVerified);
  return isStudent && isVerified;
  }

const ProtectedRouteStudent = ({ element, redirectTo }) => {
  const isAdminLoggedIn = currentUserService.getRole() === 'admin';
  if (isAdminLoggedIn) {
    return <Navigate to="/admin/home" />;
  }

  const isVerifiedByAdmin = isStudentVerifiedByAdmin();
  
  console.log('Student is verified by admin:', isVerifiedByAdmin);

  if (!isVerifiedByAdmin) {
    console.log('Student is not verified by admin');
    return <Navigate to="/student/unverified" />;
  } else {
    console.log('Student is verified by admin');
    const isStudentLoggedIn = currentUserService.getRole() === 'student';
    return isStudentLoggedIn ? element : <Navigate to={redirectTo} />;
  }
};
  

const ProtectedRouteAdmin = ({ element, redirectTo }) => {
  const isStudentLoggedIn = currentUserService.getRole() === 'student'
  if (isStudentLoggedIn) {
    return <Navigate to="/student/home" />;
  } 

  const isAdminLoggedIn = currentUserService.getRole() === 'admin'
  return isAdminLoggedIn ? element : <Navigate to={redirectTo} />;
}

const ProtectedRouteAuthentication = ({ element }) => {
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
      <Route path="/" element={<ProtectedRouteAuthentication element={<AuthenticationPage />} />} />
      <Route path="/login" element={<ProtectedRouteAuthentication element={<LoginPage />} />} />
      <Route path="/registration" element={<ProtectedRouteAuthentication element={<RegistrationPage />} />} />
      <Route path="/verify" element={<VerifyEmailPage />} />
      <Route path="/student/unverified" element={<StudentUnverifiedPage />} />

      {/* Protect these routes with ProtectedRoute */}
      <Route path="/admin/home" element={<ProtectedRouteAdmin element={<AdminHomePage />} redirectTo="/login" />} />
      <Route path="/student/home" element={<ProtectedRouteStudent element={<StudentHomePage />} redirectTo="/login" />} />
    </Routes>
  )
}

export default App
