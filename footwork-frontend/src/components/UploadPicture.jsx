import React, { useState } from "react";
import uploadIcon from "../assets/icons/upload.png"; // Upload icon

const UploadPicture = () => {
  const [image, setImage] = useState(null); // State for the image thumbnail
  const [error, setError] = useState(""); // State for any upload errors

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file && file.type.startsWith("image/")) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL); // Set the uploaded image as thumbnail
      setError(""); // Clear any errors
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
        backgroundImage: image ? `url(${image})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        cursor: "pointer",
      }}
      className="uploadContainer"
      onClick={() => document.getElementById("imageInput").click()}
    >
      {!image && (
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
