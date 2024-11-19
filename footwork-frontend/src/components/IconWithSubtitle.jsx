import React from 'react';

const IconWithSubtitle = ({ 
    icon, 
    subtitle = "", 
    onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
    >
      <div>
        <div>{icon}</div>
        <div>{subtitle}</div>
      </div>
    </button>
  );
};

export default IconWithSubtitle;
