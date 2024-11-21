import React from 'react';
import deleteIcon from '../assets/icons/delete-black.png'; 

const VideoRow = ({
    videoNumber = "",      // Video number (e.g., "1")
    thumbnail,             // Thumbnail image source
    title = "",            // Title of the video
    iconAlt = "Delete Icon", // Alt text for the icon
    onClick,               // Callback for row click
    onDelete,              // Callback for delete icon click
}) => {
    return (
        <button
            onClick={onClick} // Handle row click
        >
            <div>
                {videoNumber}
            </div>
            <div>
                <img
                    src={thumbnail}
                    alt="Video Thumbnail"
                />
            </div>
            <div>
                {title}
            </div>
            <div onClick={(e) => {
                e.stopPropagation(); // Prevent row's onClick from triggering
                onDelete(videoNumber); // Call delete handler
            }}>
                <img
                    src={deleteIcon}
                    alt={iconAlt}
                />
            </div>
        </button>
    );
};

export default VideoRow;
