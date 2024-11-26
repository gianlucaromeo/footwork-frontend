import React, { useState, useEffect } from 'react';
import Button from './Button';
import CoursesOptions from './CoursesOptions';

const CardCourses = ({ showRequestButton = true }) => {
    const [isMobile, setIsMobile] = useState(false);
    // State to track checkbox states
    const [checkboxStates, setCheckboxStates] = useState({
        beginner: false,
        advanced: false,
        intermediate: false,
    });
    // State to check whether request button was pressed
    const [buttonText, setButtonText] = useState("Request Access");

    // Detect if the device is mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.matchMedia('(max-width: 600px)').matches);
        };
        checkMobile(); // Initial check
        window.addEventListener('resize', checkMobile); // Re-check on resize
        return () => {
            window.removeEventListener('resize', checkMobile); // Cleanup
        };
    }, []);

    // Handler for checkbox changes
    const handleCheckboxChange = (label, checked) => {
        setCheckboxStates((prevState) => ({
            ...prevState,
            [label]: checked,
        }));
    };

    // Handler for request button changes
    const handleRequestAccess = () => {
        setButtonText("Request Sent"); // Change the button text
    };

    // Check if at least one checkbox is selected
    const isAnyCheckboxChecked = Object.values(checkboxStates).some((state) => state);

    return (
        <div className="card">
            {isMobile ? (
                <>
                    {/* Button container first for mobile */}
                    {showRequestButton && (
                        <div className="buttonContainer">
                            <Button 
                                className="btn-primary xs"
                                disabled={!isAnyCheckboxChecked || buttonText === "Request Sent"}
                                text={buttonText}
                                /*  TODO !!!!!!!!!!!!!!!!!!!!!!!!!!! */
                                onClick={handleRequestAccess} 
                            />
                        </div>
                    )}
                    <div className="coursesContainer">
                        <h4>Courses</h4>
                        <CoursesOptions
                            /*  TODO !!!!!!!!!!!!!!!!!!!!!!!!!!! */
                            onSelectedCoursesChanged={ () => {}}
                        />
                    </div>
                </>
            ) : (
                <>
                    {/* Courses container first for desktop */}
                    <div className="coursesContainer">
                        <h4>Courses</h4>
                        <CoursesOptions
                            /*  TODO !!!!!!!!!!!!!!!!!!!!!!!!!!! */
                            onSelectedCoursesChanged={ () => {}}
                        />
                    </div>
                    {showRequestButton && (
                        <div className="buttonContainer">
                            <Button 
                                className="btn-text s"
                                disabled={!isAnyCheckboxChecked || buttonText === "Request Sent"}
                                text={buttonText}
                                /*  TODO !!!!!!!!!!!!!!!!!!!!!!!!!!! */
                                onClick={handleRequestAccess} 
                            />
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default CardCourses;
