import SwitchButton from './switchButton';
import RegistrationCoursesOptions from './RegistrationCoursesOptions';

const RegistrationFormStep2 = ({
  firstName = "",
  onSelectedCoursesChanged,
  onConfirm,
  onIsStudentChanged
}) => {

  return (
    <div className="registrationForm">
      <div className="header">
        <h3>Register to join Polijazz</h3>
      </div>
      <div className="content">
        <div className="titleDescription">
          <div className="copy-xlarge-b">Hi {firstName}</div>
          <div className="copy-medium-reg">Nice to meet you and welcome to Polijazz. Do you register as a student or teacher?</div>
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
      </div>
      <div className="buttonContainer">
            <Button 
              className={isMobile ? "btn-text m" : "btn-text s"}
                // handleContinue not set yet so set to onContinue so that code works!
                // CHANGE
                // onClick={handleContinue}
                onClick={onContinue}
                disabled={isButtonActive}
                text="Back"
            />
            <Button 
              className={`${isMobile ? 'btn-primary m' : 'btn-primary s'} ${isButtonActive ? ' enabled' : ''}`}
              onClick={onConfirm}
              disabled={!isButtonActive}
              text="Confirm"
            />
          </div>
    </div>
  );
};

export default RegistrationFormStep2
