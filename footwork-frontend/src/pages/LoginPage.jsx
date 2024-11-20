import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import NavbarLogo from '../components/NavbarLogo'
import '../global.css';
import '../pageSpecific.css';
import LoginForm from '../components/LoginForm'

const LoginPage = () => {
    return (
        <div>
            <NavbarLogo />
            <div className="centerContent">
                <LoginForm />
            </div>
        </div>
    )
}

export default LoginPage