import React, { useState, useEffect } from 'react';
import Button from './Button';
import RegistrationCoursesOptions from './RegistrationCoursesOptions';

const CardCourses = () => {
    const [isMobile, setIsMobile] = useState(false);
    // State to track checkbox states
    const [checkboxStates, setCheckboxStates] = useState({
        beginner: false,
        advanced: false,
        intermediate: false,
    });

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

    // Check if at least one checkbox is selected
    const isAnyCheckboxChecked = Object.values(checkboxStates).some((state) => state);

    return (
        <div className="card">
            {isMobile ? (
                <>
                    {/* Button container first for mobile */}
                    <div className="buttonContainer">
                        <Button 
                            className="btn-primary m"
                            disabled={!isAnyCheckboxChecked}
                            text="Request Access"
                        />
                    </div>
                    <div className="coursesContainer">
                        <h4>Courses</h4>
                        <RegistrationCoursesOptions
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
                        <RegistrationCoursesOptions
                            /*  TODO !!!!!!!!!!!!!!!!!!!!!!!!!!! */
                            onSelectedCoursesChanged={ () => {}}
                        />
                    </div>
                    <div className="buttonContainer">
                        <Button 
                            className="btn-text s"
                            disabled={!isAnyCheckboxChecked}
                            text="Request Access"
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default CardCourses;
