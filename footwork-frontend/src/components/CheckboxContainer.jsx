import React from 'react';

const CheckboxContainer = ({ 
    label = "", 
    checked = false, 
    onChange = () => {} 
}) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)} // Pass the checked value back to the parent
      />
      <span>{label}</span>
    </div>
  );
};

export default CheckboxContainer;
