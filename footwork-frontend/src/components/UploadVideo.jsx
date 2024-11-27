import React, { useState } from "react";
import uploadIcon from "../assets/icons/upload.png"; // Upload icon

const UploadVideo = ({ onFileUploaded }) => {
  const [videoFile, setVideoFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [error, setError] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file && file.type === "video/mp4") {
      setVideoFile(file);
      setVideoUrl(URL.createObjectURL(file)); // Preview the video
      setError("");
      onFileUploaded(file); // Pass the file to parent
    } else {
      setError("Please upload a valid .mp4 video file."); // Set an error message
    }
  };

  return (
    <div
      style={{
        width: "400px",
        height: "300px",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        cursor: "pointer",
      }}
      className={`uploadContainer ${videoUrl ? "selected" : ""}`}
      onClick={() => document.getElementById("videoInput").click()}
    >
      {!videoUrl && (
        <div style={{ textAlign: "center" }}>
          <img
            src={uploadIcon}
            alt="Upload"
            style={{ width: "50px", height: "50px", marginBottom: "10px" }}
          />
          <p style={{ fontSize: "14px", color: "#666" }}>Click to upload</p>
        </div>
      )}
      {videoUrl && (
        <video
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "10px",
            objectFit: "cover",
          }}
          controls
          src={videoUrl}
        ></video>
      )}
      <input
        type="file"
        id="videoInput"
        accept="video/mp4"
        style={{ display: "none" }}
        onChange={handleFileUpload}
      />
      {error && (
        <p
          style={{
            position: "absolute",
            bottom: "-20px",
            color: "red",
            fontSize: "12px",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default UploadVideo;
