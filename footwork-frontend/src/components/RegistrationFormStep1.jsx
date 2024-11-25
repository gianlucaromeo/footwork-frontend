import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from './InputField'
import Button from './Button'
import '../global.css'

const RegistrationFormStep1 = ({
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    firstNameError,
    lastNameError,
    emailError,
    passwordError,
    handleFirstNameChange,
    handleLastNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    isButtonActive,
    onContinue,
    onBack,
}) => {
    const [isMobile, setIsMobile] = useState(false);
    
    const navigate = useNavigate();

    // Declare all state variables for validation
    const [firstNameState, setFirstNameState] = useState('default');
    const [lastNameState, setLastNameState] = useState('default');
    const [emailState, setEmailState] = useState('default');
    const [passwordState, setPasswordState] = useState('default');
    const [confirmPasswordState, setConfirmPasswordState] = useState('default');

    const handleFirstNameBlur = () => handleBlur(firstNameError, setFirstNameState, firstName);
    const handleLastNameBlur = () => handleBlur(lastNameError, setLastNameState, lastName);
    const handleEmailBlur = () => handleBlur(emailError, setEmailState, email);
    const handlePasswordBlur = () => handleBlur(passwordError, setPasswordState, password);
    const handleConfirmPasswordBlur = () => handleBlur(passwordError, setConfirmPasswordState, confirmPassword);

    // To update states once field loses focus (user switches to other field)
    const handleBlur = (error, setState, value) => {
        if (!value.trim()) {
            setState('default'); // Keep as default if the field is empty
        } else if (error && error.trim()) {
            setState('error'); // Set to error if there is an error message
        } else {
            setState('valid'); // Set to valid if no error message and value exists
        }
    };    

    // To update states of email, password and confirm password the moment an error appears
    useEffect(() => {
        const updateFieldState = (error, value, setState) => {
            if (error && error.trim()) {
                setState('error'); // Set to error if there is an error message
            } else if (value.trim()) {
                setState('valid'); // Set to valid if there is no error and input is filled
            } else {
                setState('default'); // Default if the input is empty
            }
        };
        // Update states for all fields
        updateFieldState(emailError, email, setEmailState);
        updateFieldState(passwordError, password, setPasswordState);
        updateFieldState(passwordError, confirmPassword, setConfirmPasswordState);
    }, [emailError, passwordError, email, password, confirmPassword]);

    // Checking whether it's mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.matchMedia('(max-width: 600px)').matches);
        };
        checkMobile(); // Check on initial load
        window.addEventListener('resize', checkMobile); // Update on resize
        return () => {
            window.removeEventListener('resize', checkMobile); // Cleanup
        };
    }, []);
   
    return (
        <div className="registrationForm">
            <div className="header">
                <h3>Register to Polijazz</h3>
                <p>1/2</p>
            </div>
            <div className="inputFields">
                <InputField
                    label="first name*"
                    type="text"
                    state={firstNameState}
                    value={firstName}
                    onChange={handleFirstNameChange}
                    onBlur={handleFirstNameBlur}
                    errorMessage={firstNameError}
                />
                <InputField
                    label="last name*"
                    type="text"
                    state={lastNameState}
                    value={lastName}
                    onChange={handleLastNameChange}
                    onBlur={handleLastNameBlur}
                    errorMessage={lastNameError}
                />
                <InputField
                    label="email*"
                    type="email"
                    state={emailState}
                    value={email}
                    onChange={handleEmailChange}
                    onBlur={handleEmailBlur}
                    errorMessage={emailError}
                />
                <InputField
                    label="password*"
                    type="password"
                    state={passwordState}
                    value={password}
                    onChange={handlePasswordChange}
                    onBlur={handlePasswordBlur}
                />
                <InputField
                    label="confirm password*"
                    type="password"
                    state={confirmPasswordState}
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    onBlur={handleConfirmPasswordBlur}
                    errorMessage={passwordError}
                />
            </div>
            <div className="buttonContainer">
                <Button 
                    className={isMobile ? "btn-text m" : "btn-text s"}
                    onClick={ () => navigate("/") }
                    text="Cancel"
                />
                <Button 
                    className={`${isMobile ? 'btn-primary m' : 'btn-primary s'} ${isButtonActive ? ' enabled' : ''}`}
                    onClick={onContinue}
                    disabled={!isButtonActive}
                    text="Continue"
                />
            </div>
        </div>
    );
};

export default RegistrationFormStep1
