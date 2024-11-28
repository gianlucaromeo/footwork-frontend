import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CardInformation from './CardInformation';
import TitleWithArrow from './TitleWithArrow';
import Button from './Button';
import deleteIcon from '../assets/icons/delete-white.png';
import PopUpDelete from "../components/PopUpDelete";

import adminsService from '../services/admins';
import currentUserService from '../services/currentUser';

const SectionAdminProfile = () => {
    const navigate = useNavigate();

    const [adminData, setAdminData] = useState({})
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    // Handlers for opening and closing the popup
    const showPopup = () => setIsPopupVisible(true);
    const hidePopup = () => setIsPopupVisible(false);

    useEffect(() => {
        adminsService
            .getProfile()
            .then((response) => {
                    setAdminData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div className="studentProfile">
            <div className="headerContainer profile">
                <TitleWithArrow
                    title = "Back"
                    onClick={() => navigate(-1)} // Navigate back to the previous page
                />
            </div>
            <div className="cardContainer admin">
                <CardInformation
                    firstName={adminData.firstName}
                    lastName={adminData.lastName}
                    email={adminData.email}
                />
            </div>
            <div className="mainButtonContainer">
                <Button 
                    iconName ={deleteIcon}
                    className="btn-text s"
                    text="Delete Account"
                    onClick={showPopup}
                    
                />
                <Button 
                    className="btn-primary s"
                    text="Logout"
                    onClick={() => {
                        currentUserService.clearUser()
                        navigate("/login")
                    }}
                />
            </div>
            {isPopupVisible && 
                <PopUpDelete 
                    onClose={hidePopup} 
                    title = "Account?"
                    text={`Are you sure you want to delete your account?`}
                    onDelete={() => {
                        adminsService.deleteOwnAccount().then(() => {
                            currentUserService.clearUser()
                            navigate("/login")
                        }).catch((error) => {
                            console.error('Error:', error)
                        })
                    }}
                />}
        </div>
    )
}

export default SectionAdminProfile