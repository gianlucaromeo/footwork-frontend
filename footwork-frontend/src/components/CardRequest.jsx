import React, { useState } from "react";
import CardTitleInfo from "./CardTitleInfo";
import Button from "./Button";
import CheckboxContainer from "./CheckboxContainer";

const CardRequest = ({students, enrollments, courses}) => {
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
                                        console.log(courseId, checked);
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
                            />
                            <Button 
                                className="btn-primary s"
                                text="Confirm"
                            />
                        </div>
                    </div>
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
            id={course.id}
            label={course.name}
            checked={selectedCoursesIds.includes(course.id)}
            onChange={checked => onChange(course.id, checked)}
          />
        ))}
      </div>
    );
  };

export default CardRequest