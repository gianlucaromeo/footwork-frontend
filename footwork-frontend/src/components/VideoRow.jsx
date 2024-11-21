import React from 'react';
import deleteIcon from '../assets/icons/delete-white.png'; // Importing the icon from assets

const VideoRow = ({ 
    videoNumber = "",  // Video number (e.g., "1")
    thumbnail,         // Thumbnail image source
    title = "",        // Title of the video
    iconAlt = "Delete Icon", // Alt text for the icon
}) => {
  return (
    <div 
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem',
        border: '1px solid #ddd',
        borderRadius: '5px',
        marginBottom: '1rem',
      }}
    >
      {/* Compartment 1: Video Number */}
      <div style={{ width: '50px', textAlign: 'center' }}>
        {videoNumber}
      </div>

      {/* Compartment 2: Thumbnail */}
      <div>
        <img
          src={thumbnail}
          alt="Video Thumbnail"
          style={{ width: '60px', height: '60px', borderRadius: '5px', objectFit: 'cover' }}
        />
      </div>

      {/* Compartment 3: Title */}
      <div style={{ flex: 1, marginLeft: '1rem' }}>
        <strong>{title}</strong>
      </div>

      {/* Compartment 4: Delete Icon */}
      <div>
        <img
          src={deleteIcon}
          alt={iconAlt}
          style={{ width: '24px', height: '24px', cursor: 'pointer' }}
        />
      </div>
    </div>
  );
};

export default VideoRow;
