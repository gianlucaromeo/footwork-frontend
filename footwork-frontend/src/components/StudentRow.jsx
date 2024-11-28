import React from 'react';
import { useState, useEffect } from "react";
import deleteIcon from '../assets/icons/delete-white.png';
import CheckboxContainer from './CheckboxContainer';
import PopUpDelete from "../components/PopUpDelete";

import adminsService from '../services/admins';

const StudentRow = ({
    index, // for determining whether it is an even or uneven number for colouring the bg
    studentId,
    lastName,
    firstName,
    courses,
    enrollments,
    onCoursesChange,
    onDelete,
}) => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    // Handlers for opening and closing the popup
    const showPopup = () => setIsPopupVisible(true);
    const hidePopup = () => setIsPopupVisible(false);

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 600); // Example breakpoint
        };

        checkMobile(); // Initial check
        window.addEventListener("resize", checkMobile); // Listen for window resize

        return () => {
            window.removeEventListener("resize", checkMobile); // Cleanup on unmount
        };
    }, []);

    return (
        <div className={`entryRow ${index % 2 !== 0 ? "uneven" : ""}`}>
            {isMobile ? (
                <div className="names">
                    <div>{lastName}</div>
                    <div>{firstName}</div>
                </div>
            ) : (
                <>
                    <div className="row">{lastName}</div>
                    <div className="row">{firstName}</div>
                </>
            )}
            <div className="courses">
                {courses.map((course) => {
                    const isEnrolled = enrollments.some(
                        (enrollment) =>
                            enrollment.studentId === studentId &&
                            enrollment.courseId === course.id
                    )
                    return (
                        <div 
                            className="course" 
                            key={`${studentId}-${course.id}`}>
                            <CheckboxContainer
                                id={`${studentId}-${course.id}`}
                                onChange={
                                    (checked) => onCoursesChange(
                                        studentId,
                                        course.id, 
                                        checked
                                    )
                                }
                                checked={isEnrolled}
                            />
                        </div>
                    );
                })}
            </div>
            <div className="row right-aligned"
                onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        // TODO Implement delete
                        console.log(`TODO Delete Student ${studentId}`);
                    }}
                >
                {isMobile ? (
                    <img
                        src={deleteIcon}
                        alt="Delete"
                        onClick={showPopup}
                        style={{ width: "24px", height: "24px" }}
                    />
                ) : (
                    <img
                        src={deleteIcon}
                        alt="Delete"
                        onClick={showPopup}
                        style={{ width: "32px", height: "32px" }}
                    />
                )}
            </div>
            {isPopupVisible && 
                <PopUpDelete 
                    onClose={hidePopup} 
                    title = "Student"
                    text={`Are you sure you want to delete the student: ${lastName}, ${firstName}?`}
                    onDelete={() => {
                        onDelete(studentId);
                        hidePopup();
                    }}
                />}
        </div>
    );
};

export default StudentRow;
