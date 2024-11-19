import React, { useState } from 'react'
import InputField from './InputField'

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isButtonActive, setIsButtonActive] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmailChange = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);
        const isValidEmail = validateEmail(emailValue);
        setEmailError(isValidEmail || emailValue === '' ? '' : "Please enter a valid email address");
        checkButtonActivation(isValidEmail, password);
    };

    const handlePasswordChange = (e) => {
        const passwordValue = e.target.value;
        setPassword(passwordValue);
        checkButtonActivation(validateEmail(email), passwordValue);
    };

    const checkButtonActivation = (isValidEmail, password) => {
        if (isValidEmail && password) {
            setIsButtonActive(true);
        } else {
            setIsButtonActive(false);
        }
    };
    const handleContinue = () => {
        if (isButtonActive) {
            navigate('');
        }
    };

    return (
        <div>
            <div>
                <div>Login</div>
            </div>
            <div>
                <img />
            </div>
            <InputField label='email*' type='email' value={email} onChange={handleEmailChange} errorMessage={emailError} />

            <InputField label='password*' type='password' value={password} onChange={handlePasswordChange} />
            <div>
                <button>Cancel</button>
                <button className={`continue ${isButtonActive ? 'active' : ''}`}
                    onClick={handleContinue}
                    disabled={!isButtonActive}>
                    Continue
                </button>
            </div>
        </div>
    );
}

export default LoginForm