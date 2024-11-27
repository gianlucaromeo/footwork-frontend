import React, { useState, useEffect } from 'react';

import Button from './Button';
import CheckboxContainer from './CheckboxContainer'

import coursesService from '../services/courses';

const CardCoursesStudentProfile = ({ showRequestButton = true }) => {
    const [allCourses , setAllCourses] = useState([]);
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const [selectedCoursesIds, setSelectedCoursesIds] = useState([]);

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

    // Fetch enrolled courses
    useEffect(() => {
        coursesService.getEnrolledCourses()
            .then((response) => {
                setEnrolledCourses(response.data);
                setSelectedCoursesIds(response.data.map(course => course.id));
            }).catch((error) => {
                console.log(error);
            });
    }, []);

    // Fetch all courses
    useEffect(() => {
        coursesService.getAll()
            .then((response) => {
                setAllCourses(response.data);
            }).catch((error) => {
                console.log(error);
            });
    }, []);

    // Handler for request button changes
    const handleRequestAccess = () => {
        setButtonText("Request Sent"); // Change the button text
    };

    const handleCheckboxChange = (courseId, checked) => {
        setSelectedCoursesIds((prevSelectedCoursesIds) => {
          const updatedSelectedCourses = checked
            ? [...prevSelectedCoursesIds, courseId]
            : prevSelectedCoursesIds.filter(course => course !== courseId);
          return updatedSelectedCourses;
        });
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
                            courses={allCourses}
                            selectedCoursesIds={selectedCoursesIds}
                            onSelectedCoursesChanged={handleCheckboxChange}
                            />
                    </div>
                </>
            ) : (
                <>
                    {/* Courses container first for desktop */}
                    <div className="coursesContainer">
                        <h4>Courses</h4>
                        <CoursesOptions
                            courses={allCourses}
                            selectedCoursesIds={selectedCoursesIds}
                            onSelectedCoursesChanged={handleCheckboxChange}
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

const CoursesOptions = ({ 
    onSelectedCoursesChanged,
    courses,
    selectedCoursesIds,
    title,
    desc
  }) => {
    return (
      <div className="courses">
        <div className="titleDescription">
            {title && <div className="copy-large-med">{title}</div>}
            {desc && <div className="copy-medium-reg">{desc}</div>}
        </div>
        {courses.map(course => (
          <CheckboxContainer
            key={course.id}
            id={course.id}
            label={course.name}
            checked={selectedCoursesIds.includes(course.id)}
            onChange={(checked) => onSelectedCoursesChanged(course.id, checked)} // Directly notify parent
          />
        ))}
      </div>
    );
  };
  

export default CardCoursesStudentProfile;
