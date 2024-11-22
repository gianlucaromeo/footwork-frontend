import React, { useState } from "react"; // Import useState
import TitleWithArrow from "./TitleWithArrow";
import UploadPicture from "./UploadPicture";
import InputField from "./InputField";
import SwitchButton from "./switchButton";
import Chips from "./Chips";
import BtnTextS from "./BtnTextS";
import BtnPrimaryMEnabled from "./BtnPrimaryMEnabled";

const AddFolder = () => {
    const [pictureTitle, setPictureTitle] = useState(""); // Input value state
    const [inputState, setInputState] = useState(""); // State for validation

    const handleInputChange = (event) => {
        const value = event.target.value;
        setPictureTitle(value);

        // Dynamically update the input state
        if (value.trim() === "") {
            setInputState("error");
        } else {
            setInputState("valid");
        }
    };

    return (
        <div>
            <TitleWithArrow title="Add folder" subtitle="Upload your background image as .jpg or .png" />
            <UploadPicture />
            <InputField 
                label="Title*" 
                errorMessage={inputState === "error" ? "This field is required" : ""}
                value={pictureTitle} 
                onChange={handleInputChange} 
            />
            <SwitchButton 
                nameButtonLeft="course" 
                nameButtonRight="dance" 
                contentRight={<Chips title="in this course:" />} 
            />
            <div>
                <BtnTextS>Cancel</BtnTextS>
                <BtnPrimaryMEnabled>save</BtnPrimaryMEnabled>
            </div>   
        </div>
    );
};

export default AddFolder;
