import React, { useState } from "react";
import uploadIcon from "../assets/icons/upload.png"; // Upload icon

const VideoUploadBox = () => {
  const [thumbnail, setThumbnail] = useState(null); // State for the thumbnail
  const [error, setError] = useState(""); // State for any upload errors

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("video/")) {
      const videoURL = URL.createObjectURL(file);
  
      // Create a video element to extract the thumbnail
      const video = document.createElement("video");
      video.src = videoURL;
      video.crossOrigin = "anonymous"; // Ensure the video can be used in canvas
      video.muted = true; // Mute video to prevent autoplay issues
      video.playsInline = true; // Allow it to load inline
  
      video.onloadedmetadata = () => {
        video.currentTime = 0.1; // Set time to first frame
      };
  
      video.onseeked = () => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
  
        // Set canvas size to match video dimensions
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
  
        // Draw the current frame of the video onto the canvas
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
  
        // Convert canvas to a base64 image URL
        const thumbnailURL = canvas.toDataURL("image/png");
        setThumbnail(thumbnailURL); // Set the thumbnail
        setError(""); // Clear any errors
  
        // Revoke the object URL for performance
        URL.revokeObjectURL(videoURL);
      };
  
      video.onerror = () => {
        setError("Could not load video. Please try another file.");
      };
    } else {
      setError("Please upload a valid video file.");
    }
  };
  

  return (
    <div
      //@Sarah: add the style of the (dotted) container here
      onClick={() => document.getElementById("videoInput").click()}
    >
      {!thumbnail && (
        <div>
          <img
            src={uploadIcon}
            alt="Upload"
          />
          <p>Click to upload</p>
        </div>
      )}
      <input
        type="file"
        id="videoInput"
        accept="video/*"
        onChange={handleFileUpload}
        //@Sarah: add the style for the inputfield here
      />
      {error && (
        <p
        //*@Sarah: style for error comes here
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default VideoUploadBox;