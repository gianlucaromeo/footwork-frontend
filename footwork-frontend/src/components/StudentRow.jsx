import React from 'react';
import deleteIcon from '../assets/icons/delete-white.png';
import CheckboxContainer from './CheckboxContainer';

const StudentRow = ({
    studentId,
    lastName,
    firstName,
    courses,
    enrollments,
}) => {
    return (
        <div>
            <div>
                {lastName}
            </div>
            <div>
                {firstName}
            </div>
            <div>
                {courses.map((course) => (
                    <CheckboxContainer
                        key={course.id}
                        label="X"//{course.name}
                        onClick={() => console.log(`Student ${studentId} enrolled in course ${course.id}`)}
                        checked={enrollments.some((enrollment) => enrollment.studentId === studentId && enrollment.courseId === course.id)}
                    />
                ))}
            </div>
            <div
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    // TODO Implement delete
                    console.log(`TODO Delete Student ${studentId}`);
                }}
            >
                <img
                    src={deleteIcon}
                    alt="Delete"
                />
            </div>
        </div>
    );
};

export default StudentRow;
