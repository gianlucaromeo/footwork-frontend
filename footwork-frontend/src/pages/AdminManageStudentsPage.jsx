import { useState, useEffect } from 'react';
import StudentColumn from '../components/StudentColumn';
import Button from '../components/Button'
import TitleWithArrow from '../components/TitleWithArrow';
import deleteIcon from '../assets/icons/delete-white.png';
import PopUpAdminRequest from "../components/PopUpAdminRequest";

const AdminManageStudentsPage = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isPopupVisible, setIsPopupVisible] = useState(false);

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

    // Structure for mobile
    if (isMobile) {
        return (
            <div className="adminDashboard">
                <div className="headerContainer manageStudents">
                    <TitleWithArrow
                        title = "Manage Students"
                        /* ***TODO GIANLUCA ADD NAVIGATION BACK TO ADMIN COURSES */
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
                    <div className="headerRow">
                        <div className="courses">
                            <div className="course">
                                {/* ***TODO GIANLUCA GET NAME */}
                                <h7>***Course 1</h7>
                            </div>
                            <div className="course">
                                {/* ***TODO GIANLUCA GET NAME */}
                                <h7>***Course 2</h7>
                            </div>
                            <div className="course">
                                {/* ***TODO GIANLUCA GET NAME */}
                                <h7>***Course 3</h7>
                            </div>
                        </div>
                        <div className="row right-aligned">
                            <img
                                src={deleteIcon}
                                alt="Delete"
                                style={{ width: "24px", height: "24px", visibility: "hidden" }}
                            />
                        </div>
                    </div>
                    <StudentColumn />
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
                    /* ***TODO GIANLUCA ADD NAVIGATION BACK TO ADMIN COURSES */
                />
                <Button 
                    /* ***TODO Add number of requests, if 0 then button disabled */
                    text="***Requests"
                    onClick={showPopup}
                    className="btn-primary s"
                />
            </div>
            <div className="contentContainer manageStudents">
                <div className="headerRow">
                    <div className="row">
                        <h5>last name</h5>
                    </div>
                    <div className="row">
                        <h5>first name</h5>
                    </div>
                    <div className="courses">
                        <div className="course">
                            {/* ***TODO GIANLUCA GET NAME */}
                            <h5>***Course 1</h5>
                        </div>
                        <div className="course">
                            {/* ***TODO GIANLUCA GET NAME */}
                            <h5>***Course 2</h5>
                        </div>
                        <div className="course">
                            {/* ***TODO GIANLUCA GET NAME */}
                            <h5>***Course 3</h5>
                        </div>
                    </div>
                    <div className="row right-aligned">
                        <h5>delete</h5>
                    </div>
                </div>
                <StudentColumn />
            </div>
            {isPopupVisible && <PopUpAdminRequest onClose={hidePopup} />}
        </div>
    )
}

export default AdminManageStudentsPage;