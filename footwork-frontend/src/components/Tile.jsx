import React from 'react';

const Tile = ({ 
  backgroundImage, 
  textInTile 
}) => {
  return (
    <div>      
      {/* Tile with background image and text inside */}
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`, // Set the background image
        }}
      >
        <div>{textInTile}</div>
      </div>
    </div>
  );
};

export default Tile;
