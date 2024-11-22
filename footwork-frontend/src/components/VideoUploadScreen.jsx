import React, { useState } from "react";
import TitleWithArrow from "./TitleWithArrow";
import VideoUploadBox from "./VideoUploadBox";
import InputField from "./InputField";
import Chips from "./Chips"
import BtnTextS from "./BtnTextS";
import BtnPrimaryMEnabled from "./BtnPrimaryMEnabled"

const VideoUploadScreen = () => {
    const [videoTitle, setVideoTitle] = useState(""); // Input value state
    const [inputState, setInputState] = useState(""); // State for validation

    // Handle input change
    const handleInputChange = (event) => {
        const value = event.target.value;
        setVideoTitle(value);

        // Dynamically update the input state
        if (value.trim() === "") {
            setInputState("error");
        } else {
            setInputState("valid");
        }
    };
    return (
        <div>
            <TitleWithArrow 
                title = "add video" 
                subtitle = "Upload your video in .mp4 format" />
            <VideoUploadBox />
            <InputField 
                label="Title*" 
                errorMessage={inputState === "error" ? "This field is required" : ""}
                value={videoTitle} 
                onChange={handleInputChange} 
                state={inputState} // Dynamically pass state
            />
            {/*@Gianluca: List of chips of courses from db comes here*/}
            <Chips title = "course*" />
            {/*@Gianluca: List of chips of dances from db comes here */}     
            <Chips title = "dance*" />    
            <div>
                <BtnTextS>Cancel</BtnTextS>
                <BtnPrimaryMEnabled>save</BtnPrimaryMEnabled>
            </div>   
            
        </div>
    );
};
export default VideoUploadScreen