import React, { useState } from "react"; // Import useState
import picture from '../assets/logos/logo-desktop.png';
import VideoRow from '../components/VideoRow';

const VideoColumns = () => {
  // State for managing videos
  const [videos, setVideos] = useState([
    { id: 1, thumbnail: picture, title: 'Sample Video 1' },
    { id: 2, thumbnail: picture, title: 'Sample Video 2' },
  ]);

  // Handle row click
  const handleRowClick = (id) => {
    console.log(`Video Row ${id} clicked!`);
    // Add navigation or further actions here
  };

  // Handle delete icon click
  const handleDelete = (id) => {
    console.log(`Delete Video ${id}`);
    setVideos(videos.filter((video) => video.id !== id)); // Remove video from the list
  };

  return (
    <div>
      {/* Display VideoRows */}
      {videos.map((video) => (
        <VideoRow
          key={video.id}
          videoNumber={video.id}
          thumbnail={video.thumbnail}
          title={video.title}
          onClick={() => handleRowClick(video.id)} // Pass row click handler
          onDelete={() => handleDelete(video.id)} // Pass delete handler
        />
      ))}
    </div>
  );
};

export default VideoColumns;
