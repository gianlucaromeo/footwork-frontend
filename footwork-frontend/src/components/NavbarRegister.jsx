import { useNavigate } from 'react-router-dom';
import Button from './Button';

const NavbarRegister = () => {
    const navigate = useNavigate();
    const isButtonActive = false;

    return (
        <div className="navbar">
            <div className="content">
                <div className="logo"></div>
                <div className="buttonContainer">
                    <Button 
                        className="btn-text s"
                        onClick={() => navigate('/registration')}
                        disabled={isButtonActive}
                        text="Register"
                    />
                    <Button 
                        className="btn-primary s"
                        onClick={() => navigate('/login')}
                        disabled={isButtonActive}
                        text="Login"
                    />
                </div>
            </div>
        </div>
    );
};

export default NavbarRegister;
