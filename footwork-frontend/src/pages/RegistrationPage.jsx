import { useState } from 'react'
import RegistrationPeronsalDataForm from '../components/RegistrationPersonalDataForm'
import RegistrationCoursesForm from '../components/RegistrationCoursesForm'

import adminService from '../services/admins'
import studentService from '../services/students'

const RegistrationPage = () => {
    const [isFristStep, setIsFirstStep] = useState(true)

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

    const handleSelectedCoursesChanged = (ids) => {
        setCoursesIds(ids)
    }

    const handleIsStudentChange = (value) => {
        setIsStudent(value)
        console.log('Is student: ', value)
    }

    const handleLogin = () => {
        if (isStudent) {
            console.log('Data: ', firstName, lastName, email, password, coursesIds)
            studentService.create(firstName, lastName, email, password, coursesIds)
                .then((response) => {
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error)
                })
        } else {
            adminService.create(firstName, lastName, email, password)
                .then((response) => {
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }

    const [ coursesIds, setCoursesIds ] = useState([])

    const [ isStudent, setIsStudent ] = useState(true)

    return (
        <div>
            <h1>Registration Page</h1>
            {isFristStep ? <RegistrationPeronsalDataForm 
                firstName={firstName}
                lastName={lastName}
                email={email}
                password={password}
                confirmPassword={confirmPassword}
                firstNameError={firstNameError}
                lastNameError={lastNameError}
                emailError={emailError}
                passwordError={passwordError}
                handleFirstNameChange={handleFirstNameChange}
                handleLastNameChange={handleLastNameChange}
                handleEmailChange={handleEmailChange}
                handlePasswordChange={handlePasswordChange}
                handleConfirmPasswordChange={handleConfirmPasswordChange}
                isButtonActive={isButtonActive}
                onContinue={() => setIsFirstStep(false)}
            /> : <RegistrationCoursesForm 
                firstName={firstName}
                onSelectedCoursesChanged={handleSelectedCoursesChanged}
                onConfirm={handleLogin}
                onIsStudentChanged={handleIsStudentChange}
            />}
        </div>
    )
}

export default RegistrationPage