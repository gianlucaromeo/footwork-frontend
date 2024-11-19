import React, { useState } from 'react';

const CheckboxContainer = ({ 
    label = "Default Label" 
}) => {
  // State to track if the checkbox is checked or not
  const [isChecked, setIsChecked] = useState(false);

  // Handler to toggle checkbox state
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div style={styles.container}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        style={styles.checkbox}
      />
      <span style={styles.label}>{label}</span>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0',
  },
  checkbox: {
    marginRight: '10px',
  },
  label: {
    fontSize: '16px',
    color: 'black',
  },
};

export default CheckboxContainer;
