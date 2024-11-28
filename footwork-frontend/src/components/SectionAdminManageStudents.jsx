import { useState, useEffect } from 'react';
import StudentColumn from './StudentColumn';
import Button from './Button'
import TitleWithArrow from './TitleWithArrow';
import PopUpAdminRequest from "./PopUpAdminRequest";

import coursesService from '../services/courses';
import adminsService from '../services/admins';

const SectionAdminManageStudents = ({onBack}) => {
    const [isMobile, setIsMobile] = useState(false);
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [courses, setCourses] = useState([]);
    const [unverifiedStudents, setUnverifiedStudents] = useState([]);
    // Handlers for opening and closing the popup
    const showPopup = () => setIsPopupVisible(true);
    const hidePopup = () => setIsPopupVisible(false);

    useEffect(() => {
        adminsService.getAllStudents().then((response) => {
            setUnverifiedStudents(response.data.filter(student => 
                !student.verifiedByAdmin
            ));
        }).catch((error) => {
            console.error('Error:', error);
        })
    }, [])

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

    const fetchUnverifiedStudents = () => {
        adminsService.getAllStudents().then((response) => {
            setUnverifiedStudents(response.data.filter(student => 
                !student.verifiedByAdmin
            ));
        }).catch((error) => {
            console.error('Error:', error);
        })
    }

    useEffect(() => {
        fetchUnverifiedStudents();
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
                            text={
                                unverifiedStudents.length > 0 ?
                                `Requests (${unverifiedStudents.length})` :
                                "Requests"
                            }
                            disabled={unverifiedStudents.length === 0}
                            onClick={showPopup}
                            className="btn-primary s"
                        />
                    </div>
                </div>
                <div className="contentContainer manageStudents">
                    <div className="rowContainer">
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
                {isPopupVisible && <PopUpAdminRequest onClose={() => {
                    hidePopup();
                    fetchUnverifiedStudents();
                }} />}
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
                    text={
                        unverifiedStudents.length > 0 ?
                        `Requests (${unverifiedStudents.length})` :
                        "Requests"
                    }
                    disabled={unverifiedStudents.length === 0}
                    onClick={showPopup}
                    className="btn-primary s"
                />
            </div>
            <div className="contentContainer manageStudents">
                <div className="rowContainer">
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
            {isPopupVisible && <PopUpAdminRequest onClose={() => {
                hidePopup();
                fetchUnverifiedStudents();
            }} />}
        </div>
    )
}

export default SectionAdminManageStudents;