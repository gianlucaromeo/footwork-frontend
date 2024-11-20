import profileIcon from '../assets/icons/profile-btn.svg';

const NavbarProfile = ({
    onClick,
}) => {
    return (
        <div>
            <div>
                <h1>footwork</h1>
            </div>
            <div>
                <button onClick={onClick}>
                    <img src={profileIcon} alt="Profile Icon" />
                </button>
            </div>
        </div>
    );
};

export default NavbarProfile;
