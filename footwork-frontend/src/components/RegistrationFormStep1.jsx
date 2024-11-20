import InputField from './InputField';

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
}) => {
   
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
                        onClick={onContinue}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RegistrationFormStep1
