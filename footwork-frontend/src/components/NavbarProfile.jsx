import { useNavigate } from 'react-router-dom';
import profileIcon from '../assets/icons/profile-btn.svg';

const NavbarProfile = ({
    onClick,
}) => {
    const navigate = useNavigate();
    
    return (
        <div className="navbar">
            <div className="content">
                <button className="logo" onClick={ () => navigate('/') }></button>
                <img 
                    src={profileIcon} 
                    alt="Profile Icon" 
                    onClick={onClick}
                    style={{ cursor: 'pointer' }}
                />
            </div>
        </div>
    );
};

export default NavbarProfile;
