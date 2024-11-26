import React from 'react';

const IconWithSubtitle = ({ 
    icon, 
    subtitle = "", 
    onClick = () => {} }) => {
  return (
    <div className="bigButtonContainer">
      <button
        onClick={onClick}
        className="bigButton"
      >
        <div>
          <div className="icon">{icon}</div>
        </div>
      </button>
      <div>{subtitle}</div>
    </div>
  );
};

export default IconWithSubtitle;
