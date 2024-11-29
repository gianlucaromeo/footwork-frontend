import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import InputField from './InputField'
import Button from './Button'
import CheckboxContainer from './CheckboxContainer'
import adminsSerivce from '../services/admins'
import studentsService from '../services/students'
import currentUserService from '../services/currentUser'
import '../global.css'
import profileIcon from '../assets/icons/profile-white.png';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordState, setPasswordState] = useState('');
    const [emailError, setEmailError] = useState('');
    const [emailState, setEmailState] = useState('default');
    const [isButtonActive, setIsButtonActive] = useState(false);
    const [isTeacher, setIsTeacher] = useState(false);

    const navigate = useNavigate()
    const [isMobile, setIsMobile] = useState(false);

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
    
        // Clear error if the password is being corrected
        if (passwordError) {
            setPasswordError('');
        }
    
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
                        const role = response.data.role
                        const firstName = response.data.firstName

                        currentUserService.setToken(token)
                        currentUserService.setRole(role)
                        currentUserService.setFirstName(firstName)
                        
                        navigate('/admin/home')
                    })
                    .catch((error) => {
                        console.log('Error while logging in', error)
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
                        const role = response.data.role
                        const firstName = response.data.firstName
                        const isVerifiedByAdmin = response.data.verifiedByAdmin

                        currentUserService.setToken(token)
                        currentUserService.setRole(role)
                        currentUserService.setFirstName(firstName)
                        currentUserService.setIsVerifiedByAdmin(isVerifiedByAdmin)

                        navigate('/student/home')
                    })
                    .catch((error) => {
                        console.log('Error while logging in', error)
                        const message = error.response?.data?.error || 'An unexpected error occurred';
                        if (message =="Both email and password are required" ||
                            message =="Invalid email or password"
                        ) {
                            setEmailError(message);
                            setPasswordError(message);
                        }
                        else {
                            setEmailError(message);
                        }
                    });
            }
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
    }, [emailError, passwordError, email, password]);

    const handleBack = () => {
        navigate('/');
    };

    return (
        <div className="loginForm">
            <div className="header">
                <h3>Login</h3>
            </div>
            <div className="content">
                <div className="iconContainer">
                    <img src={profileIcon} alt="Profile Icon" className="icon" />
                </div>
                {/* state of InputField can be default, valid or error */}
                <InputField label='email*' type='email' state={emailState} value={email} onChange={handleEmailChange} errorMessage={emailError} />
                <InputField label='password*' type='password' state ={passwordState} value={password} onChange={handlePasswordChange} errorMessage={passwordError} />
                <div>
                    <CheckboxContainer
                        id={"teacher_checkbox"}
                        label='I am a teacher' 
                        checked={isTeacher} 
                        onChange={setIsTeacher} 
                    />
                </div>
            </div>
            <div className='buttonContainer'>
                    <Button 
                        className={isMobile ? "btn-text m" : "btn-text s"}
                        onClick={handleBack}
                        text="Cancel"
                    />
                    <Button 
                        className={isMobile ? "btn-primary m" : "btn-primary s"}
                        onClick={handleContinue}
                        disabled={!isButtonActive}
                        text="Continue"
                    />
            </div>
        </div>
    );
}

export default LoginForm