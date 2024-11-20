import { useNavigate } from 'react-router-dom';

const NavbarLogo = () => {
    const navigate = useNavigate();
    const isButtonActive = false;

    return (
        <div className="navbar">
            <div className="content">
                <button className="logo" onClick={ () => navigate('/') }></button>
            </div>
        </div>
    );
};

export default NavbarLogo;