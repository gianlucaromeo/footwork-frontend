import { useEffect, useState } from 'react';
import SwitchButton from './SwitchButton';
import Button from './Button';
import RegistrationCoursesOptions from './RegistrationCoursesOptions';

const RegistrationFormStep2 = ({
  firstName = "",
  onSelectedCoursesChanged,
  onBack,
  isButtonActive,
  onConfirm,
  onIsStudentChanged
}) => {
  const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.matchMedia('(max-width: 600px)').matches);
        };
        checkMobile(); // Check on initial load
        window.addEventListener('resize', checkMobile); // Update on resize
        return () => {
            window.removeEventListener('resize', checkMobile); // Cleanup
        };
    }, []);

  return (
    <div className="registrationForm">
      <div className="header">
                <h3>Register to Polijazz</h3>
                <p>2/2</p>
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
                onBack={onBack}
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
