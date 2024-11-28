import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import CardCoursesStudentProfile from './CardCoursesStudentProfile';
import CardInformation from './CardInformation';
import TitleWithArrow from './TitleWithArrow';
import Button from './Button';
import deleteIcon from '../assets/icons/delete-white.png';
import PopUpDelete from "../components/PopUpDelete";

import studentsService from '../services/students';
import coursesService from '../services/courses';
import currentUserService from '../services/currentUser';

const SectionStudentProfile = ({onBack}) => {
    const [student, setStudent] = useState({});
    const [enrolledCourses, setEnrolledCourses] = useState([]);

    const navigate = useNavigate();

    const [isPopupVisible, setIsPopupVisible] = useState(false);

    // Handlers for opening and closing the popup
    const showPopup = () => setIsPopupVisible(true);
    const hidePopup = () => setIsPopupVisible(false);

    useEffect(() => {
        studentsService.getProfile()
            .then((response) => {
                setStudent(response.data);
            }).catch((error) => {
                console.log(error);
            });
    }, [])

    useEffect(() => {
        coursesService.getEnrolledCourses()
            .then((response) => {
                setEnrolledCourses(response.data);
            }).catch((error) => {
                console.log(error);
            });
    }, [])

    return (
        <div className="studentProfile">
            <div className="headerContainer profile">
                <TitleWithArrow
                    title = "Back"
                    onClick={onBack}
                />
            </div>
            <div className="cardContainer">
                <CardInformation
                    firstName={student.firstName}
                    lastName={student.lastName}
                    email={student.email}
                />
                <CardCoursesStudentProfile />
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
                        studentsService.deleteOwnAccount().then(() => {
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

export default SectionStudentProfile