import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import NavbarRegister from '../components/NavbarRegister'
import NavbarLogo from '../components/NavbarLogo'
import Button from '../components/Button'
import authenticationBg from '../assets/images/authenticationBg.png';
import '../global.css';
import '../pageSpecific.css';

const AuthenticationPage = () => {
    const navigate = useNavigate()
    const isButtonActive = false;
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.matchMedia('(max-width: 600px)').matches);
        };

        console.log('Initial isMobile:', window.matchMedia('(max-width: 600px)').matches);
        checkMobile(); // Check on initial load
        window.addEventListener('resize', checkMobile); // Update on resize

        return () => {
            window.removeEventListener('resize', checkMobile); // Cleanup
        };
    }, []);

    console.log('isMobile:', isMobile);

    return (
        <div>
            {/* Conditionally render Navbar */}
            {isMobile ? <NavbarLogo /> : <NavbarRegister />}
            <div className="bgImageContainer"
                style={{
                    backgroundImage: `url(${authenticationBg})`,
                    backgroundColor: 'lightgray',
                }}
            >
                <div className="join">
                    <div className="titleContainer">
                        <h1>Join Polijazz</h1>
                        <div className={isMobile ? "copy-medium-reg" : "copy-large-reg"}>In easy dance video management</div>
                    </div>
                    <Button 
                        className="btn-primary m"
                        onClick={ () => navigate('/registration') }
                        disabled={isButtonActive}
                        text="Register"
                    />
                </div>
                <div className="login">
                    <div>Already have an account?</div>
                    <Button 
                        className="btn-text s"
                        onClick={ () => navigate('/login') }
                        disabled={isButtonActive}
                        text="Login"
                    />
                </div> 
            </div>   
        </div>
    )
}

export default AuthenticationPage