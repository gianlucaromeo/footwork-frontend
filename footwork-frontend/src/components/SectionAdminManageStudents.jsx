import { useState, useEffect } from 'react';
import StudentColumn from './StudentColumn';
import Button from './Button'
import TitleWithArrow from './TitleWithArrow';
import deleteIcon from '../assets/icons/delete-white.png';
import PopUpAdminRequest from "./PopUpAdminRequest";

import coursesService from '../services/courses';

const SectionAdminManageStudents = ({onBack}) => {
    const [isMobile, setIsMobile] = useState(false);
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [courses, setCourses] = useState([]);

    // Handlers for opening and closing the popup
    const showPopup = () => setIsPopupVisible(true);
    const hidePopup = () => setIsPopupVisible(false);

    // Detect screen size and set `isMobile`
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 600);
        };
        checkMobile(); 
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    useEffect(() => {
        coursesService.getAll().then((response) => {
            setCourses(response.data);
        }).catch((error) => {
            console.error('Error:', error);
        })
    }, [])

    // Structure for mobile
    if (isMobile) {
        return (
            <div className="adminDashboard">
                <div className="headerContainer manageStudents">
                    <TitleWithArrow
                        title = "Manage Students"
                        onClick={onBack}
                    />
                    <div className="buttonContainer">
                        <Button 
                            /* ***TODO Add number of requests, if 0 then button disabled */
                            text="***Requests"
                            onClick={showPopup}
                            className="btn-primary s"
                        />
                    </div>
                </div>
                <div className="contentContainer manageStudents">
                    <div class="rowContainer">
                        <div className="headerRow">
                            <div className="courses">
                                {courses.map((course) => (
                                    <div className="course" key={course.id}>
                                        <h5>{course.name}</h5>
                                    </div>
                                ))}
                            </div>
                            <div className="row right-aligned">
                                <h5>delete</h5>
                            </div>
                        </div>
                        {
                         /* TODO Fix bug: if popup is visible, the onChange
                            of CardRequest doesn't work and React uses the 
                            one from StudentColumn > StudentRow */
                        }
                        {!isPopupVisible && <StudentColumn />}
                    </div>
                </div>
                {isPopupVisible && <PopUpAdminRequest onClose={hidePopup} />}
            </div>
        );
    }

    // Default structure for larger screens
    return (
        <div className="adminDashboard">
            <div className="headerContainer manageStudents">
                <TitleWithArrow
                    title = "Manage Students"
                    onClick={onBack}
                />
                <Button 
                    /* ***TODO Add number of requests, if 0 then button disabled */
                    text="***Requests"
                    onClick={showPopup}
                    className="btn-primary s"
                />
            </div>
            <div className="contentContainer manageStudents">
                <div class="rowContainer">
                    <div className="headerRow">
                        <div className="row">
                            <h5>last name</h5>
                        </div>
                        <div className="row">
                            <h5>first name</h5>
                        </div>
                        <div className="courses">
                                {courses.map((course) => (
                                    <div className="course" key={course.id}>
                                        <h5>{course.name}</h5>
                                    </div>
                                ))}
                            </div>
                        <div className="row right-aligned">
                            <h5>delete</h5>
                        </div>
                    </div>
                    {
                         /* TODO Fix bug: if popup is visible, the onChange
                            of CardRequest doesn't work and React uses the 
                            one from StudentColumn > StudentRow */
                    }
                    {!isPopupVisible && <StudentColumn />}
                </div>
            </div>
            {isPopupVisible && <PopUpAdminRequest onClose={hidePopup} />}
        </div>
    )
}

export default SectionAdminManageStudents;