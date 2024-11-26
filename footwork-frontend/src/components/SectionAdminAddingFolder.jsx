import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Button from './Button'
import TitleWithArrow from './TitleWithArrow'
import UploadPicture from './UploadPicture'
import InputField from './InputField'
import SwitchButton from './SwitchButton'

import coursesService from '../services/courses'

const SectionAdminAddingFolder = ({
    onClick
}) => {
    const navigate = useNavigate();

    const [courseImage, setCourseImage] = useState(null);
    const [isCourse, setIsCourse] = useState(true); // If false, it's a dance
    const [courseTitle, setCourseTitle] = useState("");

    const handleGoBack = () => {
        navigate(-1); // Navigates to the previous page
    };

    const handleCreateCourse = async () => {
        if (!courseImage || !courseTitle) {
            alert("Please provide a title and upload an image.");
            return;
        }
    
        const fileName = courseTitle;
        const folderName = "/"; // courseTitle;
        const coverImage = courseImage;
    
        try {
            await coursesService.createCourse(fileName, folderName, coverImage);
            console.log("Course created successfully!");
            navigate(-1); // Go back to the previous page
        } catch (error) {
            console.error("Error creating course:", error);
            alert("An error occurred. Please try again.");
        }
    };
    

    return (
        <div className="adminDashboard">
            <div className="headerContainer">
                <TitleWithArrow
                    title = "Add Folder"
                    subtitle = "Upload your background image as .jpg or .png"
                    onClick={handleGoBack}
                />
            </div>
            <div className="contentContainer addFolderVideo">
                <div className="data">
                    <UploadPicture 
                        onFileUploaded={(file) => setCourseImage(file)} 
                    />
                    <div className="titleType">
                        <InputField
                            state="default"
                            label="title"
                            value={courseTitle}
                            onChange={(e) => setCourseTitle(e.target.value)}
                            type = "text"
                        />
                        <div className="type">
                            <div>add this folder as a new</div>
                            <SwitchButton
                                nameButtonLeft = "Course"
                                nameButtonRight = "Dance"
                                onLeftClick={() => setIsCourse(true)}
                                onRightClick={() => setIsCourse(false)}
                            />
                        </div>
                    </div>
                </div>
                <div className="buttonContainer">
                    <Button
                        className="btn-text s"
                        text = "Cancel"
                        onClick={handleGoBack}
                    />
                    <Button
                        className="btn-primary s"
                        text = "Save"
                        onClick={() => isCourse 
                            ? handleCreateCourse() 
                            : console.log("Dance")}
                    />
                </div>
            </div>
        </div>
    );
}

export default SectionAdminAddingFolder