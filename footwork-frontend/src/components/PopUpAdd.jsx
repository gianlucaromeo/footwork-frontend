import React from 'react';
import Button from './Button';
import IconWithSubtitle from './IconWithSubtitle';
import folderIcon from '../assets/icons/add-folder.png'; // Import the folder image
import videoIcon from '../assets/icons/video.png';

const PopUpAdd = ({ 
  onClose,
  onAddFolderClick,
  onAddVideoClick
}) => {
  
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
                onClick={onAddFolderClick}
              />
              <IconWithSubtitle
                icon={<img src={videoIcon} alt="Video Icon" />}
                subtitle="Video"
                onClick={onAddVideoClick}
              />
          </div>
      </div>
    </div>
  );
};

export default PopUpAdd;
