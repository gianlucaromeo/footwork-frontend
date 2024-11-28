import React, { useEffect, useState } from "react";
import uploadIcon from "../assets/icons/upload.png"; // Upload icon

const UploadPicture = ( {onFileUploaded, initialImage}) => {
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialImage && initialImage instanceof File) {
      setImageFile(initialImage);
      setImageUrl(URL.createObjectURL(initialImage));
    }
  }, [initialImage])

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file && file.type.startsWith("image/")) {
      setImageFile(file);
      setImageUrl(URL.createObjectURL(file)); 
      setError("");
      onFileUploaded(file);
    } else {
      setError("Please upload a valid image file."); // Set an error message
    }
  };

  return (
    <div 
      style={{
        backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        cursor: "pointer",
      }}
      className={`uploadContainer ${imageUrl ? "selected" : ""}`}
      onClick={() => document.getElementById("imageInput").click()}
    >
      <div
        style={{
          textAlign: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2, // Ensure it layers above the image
          pointerEvents: "none", // Prevent clicks interfering with the upload
        }}
      >
        <img
          src={uploadIcon}
          alt="Upload"
          style={{ width: "50px", height: "50px", marginBottom: "10px" }}
        />
        <p>Click to upload</p>
      </div>
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
