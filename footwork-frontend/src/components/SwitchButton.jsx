import React, { useState } from 'react';

const SwitchButton = ({
  contentLeft = "",
  contentRight = ""
}) => {
  // State to track which button is selected and to control the text field content
  const [isLeftSelected, setIsLeftSelected] = useState(true);
  const [text, setText] = useState(contentLeft); // Initial content for the left button

  // Handler for left button click
  const handleLeftClick = () => {
    setIsLeftSelected(true);
    setText(contentLeft); // Update text for left button
  };

  // Handler for right button click
  const handleRightClick = () => {
    setIsLeftSelected(false);
    setText(contentRight); // Update text for right button
  };

  return (
    <div>
      <div>
        <button
          onClick={handleLeftClick}>
          Left
        </button>
        <button
          onClick={handleRightClick}>
          Right
        </button>
      </div>
      {/* Text field to display content based on button selection */}
      <textarea
        value={text}
        readOnly
      />
    </div>
  );
};

export default SwitchButton;
