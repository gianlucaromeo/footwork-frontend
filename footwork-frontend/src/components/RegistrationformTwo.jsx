import React from 'react';
import SwitchButton from './switchButton';
import CourseSignUp from './CourseSignUp';

const RegistrationformTwo = ({
  firstname = "",
}) => {
  return (
    <div>
      <h3>Register to join Polijazz</h3>
      <div>Hi {firstname}</div>
      <div>
        Nice to meet you and welcome to Polijazz. Do you register as a student or teacher?
      </div>
      <SwitchButton 
        nameButtonLeft="student" 
        nameButtonRight="teacher"
        contentLeft={<CourseSignUp />}
        contentRight="We will notify Polijazz about your access request"
      />
      <div>
        <button>Back</button>
        <button> Confirm</button>
      </div>
    </div>
  );
};

export default RegistrationformTwo;
