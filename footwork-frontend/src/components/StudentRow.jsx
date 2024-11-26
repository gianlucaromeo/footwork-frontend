import React from 'react';
import { useState, useEffect } from "react";
import deleteIcon from '../assets/icons/delete-white.png';
import CheckboxContainer from './CheckboxContainer';

const StudentRow = ({
    index, // for determining whether it is an even or uneven number for colouring the bg
    studentId,
    lastName,
    firstName,
    courses,
    enrollments,
}) => {

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
            {/* OLD CODE WITH GIANLUCAS return Checkbox
             <div className="courses"> 
                <div className="course">
                    {courses.map((course) => {
                        return (
                            <CheckboxContainer
                                key={course.id}
                                id={course.id}
                                label={course.name}
                                onChange={(e) => console.log(`Course ${course.id} clicked`)}
                                checked={enrollments.some((enrollment) => enrollment.studentId === studentId && enrollment.courseId === course.id)} />
                        );
                    })}
                </div> 
            </div> */}
            <div className="courses">
                {courses.map((course) => {
                    return (
                        <div className="course" key={course.id}>
                            <CheckboxContainer
                                id={course.id}
                                onChange={(e) => console.log(`Course ${course.id} clicked`)}
                                checked={enrollments.some(
                                    (enrollment) =>
                                        enrollment.studentId === studentId &&
                                        enrollment.courseId === course.id
                                )}
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
                        style={{ width: "24px", height: "24px" }}
                    />
                ) : (
                    <img
                        src={deleteIcon}
                        alt="Delete"
                        style={{ width: "32px", height: "32px" }}
                    />
                )}
            </div>
        </div>
    );
};

export default StudentRow;
