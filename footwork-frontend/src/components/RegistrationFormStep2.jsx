import SwitchButton from './switchButton';
import RegistrationCoursesOptions from './RegistrationCoursesOptions';

const RegistrationFormStep2 = ({
  firstName = "",
  onSelectedCoursesChanged,
  onConfirm,
  onIsStudentChanged
}) => {

  return (
    <div>
      <h3>Register to join Polijazz</h3>
      <div>Hi {firstName}</div>
      <div>
        Nice to meet you and welcome to Polijazz. Do you register as a student or teacher?
      </div>
      <SwitchButton 
        nameButtonLeft="student" 
        nameButtonRight="teacher"
        contentLeft={<RegistrationCoursesOptions
          onSelectedCoursesChanged={onSelectedCoursesChanged}
        />}
        contentRight="We will notify Polijazz about your access request"
        onLeftClick={() => onIsStudentChanged(true)}
        onRightClick={() => onIsStudentChanged(false)}
      />
      <div>
        <button>Back</button>
        <button onClick={onConfirm}> Confirm</button>
      </div>
    </div>
  );
};

export default RegistrationFormStep2
