import React from 'react';
import Button from './Button';
import IconWithSubtitle from './IconWithSubtitle';
import folderIcon from '../assets/icons/add-folder.png'; // Import the folder image
import videoIcon from '../assets/icons/video.png';

const PopUpAdd = ({ onClose }) => {
  // Handlers for the clicks on the icons
  const handleFolderClick = () => {
    console.log('Folder icon clicked!');
    // Add your folder-specific logic here
  };

  const handleVideoClick = () => {
    console.log('Video icon clicked!');
    // Add your video-specific logic here
  };

  return (
    <div className="popupOverlay" onClick={onClose}>
      <div className="popupContainer" onClick={(e) => e.stopPropagation()}>
          <div className="titleButton">
            <h2>Add</h2>
            <Button 
                text="cancel" 
                className="btn-text s"
                onClick={onClose} 
            />
          </div>
          <div className="bigButtons">
              <IconWithSubtitle
                icon={<img src={folderIcon} alt="Folder Icon" />}
                subtitle="Folder"
                onClick={handleFolderClick} // Pass the click handler
              />
              <IconWithSubtitle
                icon={<img src={videoIcon} alt="Video Icon" />}
                subtitle="Video"
                onClick={handleVideoClick} // Pass the click handler
              />
          </div>
      </div>
    </div>
  );
};

export default PopUpAdd;
