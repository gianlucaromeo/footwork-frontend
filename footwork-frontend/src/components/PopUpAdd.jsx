import React from 'react';
import BtnTextS from './BtnTextS';
import IconWithSubtitle from './IconWithSubtitle';
import folder from '../assets/icons/add-folder.png'; // Import the folder image
import video from '../assets/icons/video.png';

const PopUpAdd = () => {
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
    <div>
      <h2>Add</h2>
      <BtnTextS>Cancel</BtnTextS>
      <IconWithSubtitle
        icon={<img src={folder} alt="Folder Icon" />}
        subtitle="Folder"
        onClick={handleFolderClick} // Pass the click handler
      />
      <IconWithSubtitle
        icon={<img src={video} alt="Video Icon" />}
        subtitle="Video"
        onClick={handleVideoClick} // Pass the click handler
      />
    </div>
  );
};

export default PopUpAdd;
