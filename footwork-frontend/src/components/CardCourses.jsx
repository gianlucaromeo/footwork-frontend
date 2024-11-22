import React, { useState } from 'react';
import CheckboxContainer from './CheckboxContainer';
import BtnPrimaryMEnabled from './BtnPrimaryMEnabled';

const CardCourses= ({ 
    showRequestButton = true 
}) => {
    // State to track checkbox states
    const [checkboxStates, setCheckboxStates] = useState({
        beginner: false,
        advanced: false,
        intermediate: false,
    });

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
        <div>
            <h5>Courses</h5>
            <div>
                <CheckboxContainer
                    label="Breakdance beginner"
                    checked={checkboxStates.beginner}
                    onChange={(checked) => handleCheckboxChange('beginner', checked)}
                />
                <CheckboxContainer
                    label="Breakdance advanced"
                    checked={checkboxStates.advanced}
                    onChange={(checked) => handleCheckboxChange('advanced', checked)}
                />
                <CheckboxContainer
                    label="Contemporary intermediate"
                    checked={checkboxStates.intermediate}
                    onChange={(checked) => handleCheckboxChange('intermediate', checked)}
                />
            </div>
            {showRequestButton && (
                <BtnPrimaryMEnabled disabled={!isAnyCheckboxChecked}>
                    Request Access
                </BtnPrimaryMEnabled>
            )}
        </div>
    );
};

export default CardCourses;
