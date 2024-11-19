import React, { useState } from 'react';
import InputField from './InputField';

const RegistrationForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isButtonActive, setIsButtonActive] = useState(false);

    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleFirstNameChange = (e) => {
        const value = e.target.value;
        setFirstName(value);
        setFirstNameError(value.trim() === '' ? 'Please enter your first name' : '');
        checkButtonActivation(value, lastName, email, password, confirmPassword);
    };

    const handleLastNameChange = (e) => {
        const value = e.target.value;
        setLastName(value);
        setLastNameError(value.trim() === '' ? 'Please enter your last name' : '');
        checkButtonActivation(firstName, value, email, password, confirmPassword);
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        const isValid = validateEmail(value);
        setEmailError(isValid || value === '' ? '' : 'Please enter a valid email address');
        checkButtonActivation(firstName, lastName, isValid, password, confirmPassword);
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setPasswordError(value !== confirmPassword ? 'Passwords do not match' : '');
        checkButtonActivation(firstName, lastName, email, value, confirmPassword);
    };

    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);
        setPasswordError(value !== password ? 'Passwords do not match' : '');
        checkButtonActivation(firstName, lastName, email, password, value);
    };

    const checkButtonActivation = (first, last, isValidEmail, pass, confirmPass) => {
        if (first.trim() && last.trim() && isValidEmail && pass && pass === confirmPass) {
            setIsButtonActive(true);
        } else {
            setIsButtonActive(false);
        }
    };

    return (
        <div>
            <div>
                <div>Register to Polijazz</div>
            </div>
            <div>
                <InputField
                    label="First Name*"
                    type="text"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    errorMessage={firstNameError}
                />
                <InputField
                    label="Last Name*"
                    type="text"
                    value={lastName}
                    onChange={handleLastNameChange}
                    errorMessage={lastNameError}
                />
                <InputField
                    label="Email*"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    errorMessage={emailError}
                />
                <InputField
                    label="Password*"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <InputField
                    label="Confirm Password*"
                    type="password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    errorMessage={passwordError}
                />
                <div>
                    <button>Cancel</button>
                    <button
                        className={`continue ${isButtonActive ? 'active' : ''}`}
                        disabled={!isButtonActive}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;
