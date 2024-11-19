import React, { useState } from 'react';

const CheckboxContainer = ({ 
    label = "" 
}) => {
  // State to track if the checkbox is checked or not
  const [isChecked, setIsChecked] = useState(false);

  // Handler to toggle checkbox state
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span>{label}</span>
    </div>
  );
};

export default CheckboxContainer;
