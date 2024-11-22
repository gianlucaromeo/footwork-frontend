import React, { useState } from 'react';

const SwitchButton = ({
  nameButtonLeft = "",
  nameButtonRight = "",
  contentLeft = "",
  contentRight = "",
  onLeftClick = () => {},
  onRightClick = () => {}
}) => {
  // State to track which button is selected
  const [isLeftSelected, setIsLeftSelected] = useState(true);

  // Handler for left button click
  const handleLeftClick = () => {
    setIsLeftSelected(true);
    onLeftClick();
  };

  // Handler for right button click
  const handleRightClick = () => {
    setIsLeftSelected(false);
    onRightClick();
  };

  return (
    <div className="content">
      <div className="switchContainer">
        <button 
          className={`switch left ${isLeftSelected ? "selected" : ""}`}
          onClick={handleLeftClick}
        >
          {nameButtonLeft}
        </button>
        <button 
        className={`switch right ${!isLeftSelected ? "selected" : ""}`}
          onClick={handleRightClick}
        >
          {nameButtonRight}
        </button>
      </div>
      <div>
        {isLeftSelected ? contentLeft : contentRight}
      </div>
    </div>
  );
};

export default SwitchButton;
