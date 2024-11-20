import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputField from './InputField'
import Button from './Button'
import CheckboxContainer from './CheckboxContainer'
import adminsSerivce from '../services/admins'
import studentsService from '../services/students'
import currentUserService from '../services/currentUser'
import '../global.css'

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isButtonActive, setIsButtonActive] = useState(false);
    const [isTeacher, setIsTeacher] = useState(false);

    const navigate = useNavigate()

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
            if (isTeacher) {
                // TEACHER
                adminsSerivce.login(email, password)
                    .then((response) => {
                        console.log(response)

                        const token = response.data.token
                        const id = response.data.id
                        const role = 'admin'

                        currentUserService.setToken(token)
                        currentUserService.setId(id)
                        currentUserService.setRole(role)
                        
                        navigate('/admin/home')
                    })
                    .catch((error) => {
                        const errorMessage = error.response.data.error
                        console.log(errorMessage)
                        //
                        // TODO: Understand which error message we get from the
                        // backend and set it here. 
                        // 
                        // Errors can be:
                        // - "Both email and password are required"
                        // - "Email is not valid"
                        // - "Invalid email or password"
                        // - "Please confirm your email before logging in"
                    });
            } else {
                // STUDENT
                studentsService.login(email, password)
                    .then((response) => {
                        console.log(response)

                        const token = response.data.token
                        const id = response.data.id
                        const role = 'student'
                        currentUserService.setToken(token)
                        currentUserService.setId(id)
                        currentUserService.setRole(role)

                        navigate('/student/home')
                    })
                    .catch((error) => {
                        const errorMessage = error.response.data.error
                        console.log(errorMessage)
                        //
                        // TODO: Understand which error message we get from the
                        // backend and set it here. 
                        // 
                        // Errors can be:
                        // - "Both email and password are required"
                        // - "Email is not valid"
                        // - "Invalid email or password"
                        // - "Please confirm your email before logging in"
                    });
            }
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
                <CheckboxContainer
                  label='I am a teacher' 
                  checked={isTeacher} 
                  onChange={setIsTeacher} 
                />
            </div>
            <div className='buttonContainer'>
                <Button text="Cancel" />
                <Button 
                    onClick={handleContinue}
                    disabled={!isButtonActive}
                    text="Continue"
                />
            </div>
        </div>
    );
}

export default LoginForm