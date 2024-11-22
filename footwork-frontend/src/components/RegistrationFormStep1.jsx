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
                    state ='default'
                    value={firstName}
                    onChange={handleFirstNameChange}
                    errorMessage={firstNameError}
                />
                <InputField
                    label="last name*"
                    type="text"
                    state ='default'
                    value={lastName}
                    onChange={handleLastNameChange}
                    errorMessage={lastNameError}
                />
                <InputField
                    label="email*"
                    type="email"
                    state ='default'
                    value={email}
                    onChange={handleEmailChange}
                    errorMessage={emailError}
                />
                <InputField
                    label="password*"
                    type="password"
                    state ='default'
                    value={password}
                    onChange={handlePasswordChange}
                />
                <InputField
                    label="confirm password*"
                    type="password"
                    state ='default'
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
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
