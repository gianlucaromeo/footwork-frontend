import React, { useState } from "react";
import uploadIcon from "../assets/icons/upload.png"; // Upload icon

const UploadPicture = ( {onFileUploaded }) => {
  const [imageFile, setImageFile] = useState(null); 
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file && file.type.startsWith("image/")) {
      setImageFile(file);
      setImageUrl(URL.createObjectURL(file)); 
      setError("");
      onFileUploaded(file);
      console.log(file.type)
    } else {
      setError("Please upload a valid image file."); // Set an error message
    }
  };

  return (
    <div 
      style={{
        width: "400px",
        height: "300px",
        border: "2px dashed #ccc",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        cursor: "pointer",
      }}
      className="uploadContainer"
      onClick={() => document.getElementById("imageInput").click()}
    >
      {!imageUrl && (
        <div style={{ textAlign: "center" }}>
          <img
            src={uploadIcon}
            alt="Upload"
            style={{ width: "50px", height: "50px", marginBottom: "10px" }}
          />
          <p style={{ fontSize: "14px", color: "#666" }}>Click to upload</p>
        </div>
      )}
      <input
        type="file"
        id="imageInput"
        accept="image/*"
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

export default UploadPicture;
