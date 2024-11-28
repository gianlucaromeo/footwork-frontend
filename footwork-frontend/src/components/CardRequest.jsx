import React, { useState } from "react";
import CardTitleInfo from "./CardTitleInfo";
import Button from "./Button";
import CheckboxContainer from "./CheckboxContainer";
import PopUpDelete from "../components/PopUpDelete";

import adminsService from "../services/admins";

const CardRequest = ({
    students,
    enrollments, 
    courses, 
    onEnrollmentChanged,
    onStudentVerified,
    onDeny,
}) => {

    const [popupVisibility, setPopupVisibility] = useState({});

    // Handlers for opening and closing the popup for a specific student
    const showPopup = (studentId) => {
        setPopupVisibility((prev) => ({ ...prev, [studentId]: true }));
    };

    const hidePopup = (studentId) => {
        setPopupVisibility((prev) => ({ ...prev, [studentId]: false }));
    };

    return(
        <div className="scrollingRequests">
            {students.map((student) => (
                <React.Fragment key={student.id}>
                    <div className="card request">
                        <div className="informationContainer">
                            <div className="column">
                                <CardTitleInfo 
                                    title="last name" 
                                    data={student.firstName}
                                />
                                <CardTitleInfo 
                                    title="first name" 
                                    data={student.lastName}
                                />
                            </div>
                            <div className="coursesContainer">
                                <h5>Courses</h5>
                                <CoursesOptions
                                    onChange={(courseId, checked) => {
                                        onEnrollmentChanged(
                                            student.id, 
                                            courseId,
                                            checked
                                        );
                                    }}
                                    courses={courses}
                                    selectedCoursesIds={enrollments.filter(enrollment => enrollment.studentId === student.id).map(enrollment => enrollment.courseId)}
                                    studentId={student.id}
                                />
                            </div>
                        </div>
                        <div className="buttonContainer">
                            <Button 
                                className="btn-text s"
                                text="Deny"
                                onClick={() => showPopup(student.id)}
                                // onClick={() => onDeny(student.id)}
                                
                            />
                            <Button 
                                className="btn-primary s"
                                text="Confirm"
                                onClick={() => onStudentVerified(student.id)}
                            />
                        </div>
                    </div>
                    {popupVisibility[student.id] && 
                        <PopUpDelete 
                            key={`${student.id}-deny-popup`}
                            onClose={() => hidePopup(student.id)} 
                            title="Deny"
                            text={`Are you sure you want to deny and delete the student: ${student.lastName}, ${student.firstName}?`}
                            onDelete={() => {
                                onDeny(student.id);
                                hidePopup(student.id);
                            }}
                        />}
                </React.Fragment>
            ))}
        </div>
    )
}

const CoursesOptions = ({ 
    studentId,
    onChange,
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
            key={`${studentId}-${course.id}`}
            id={`${studentId}-${course.id}`}
            label={course.name}
            checked={selectedCoursesIds.includes(course.id)}
            onChange={checked => onChange(course.id, checked)}
          />
        ))}
      </div>
    );
  };

export default CardRequest