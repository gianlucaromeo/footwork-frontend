import React from 'react';
import CheckboxContainer from './CheckboxContainer';

const CourseSignUp = () => {
  return (
    <div>
      <h3>Courses</h3>
      <p>Which courses do you want to sign up for?</p>
      {/* Render the CheckboxContainer components with appropriate labels */}
      <CheckboxContainer label="Breakdance Beginner" />
      <CheckboxContainer label="Breakdance Advanced" />
      <CheckboxContainer label="Contemporary Intermediate" />
    </div>
  );
};

export default CourseSignUp;
