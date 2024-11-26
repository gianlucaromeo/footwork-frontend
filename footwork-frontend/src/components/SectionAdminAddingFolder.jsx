import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Button from './Button'
import TitleWithArrow from './TitleWithArrow'
import UploadPicture from './UploadPicture'
import InputField from './InputField'
import SwitchButton from './SwitchButton'
import CoursesOptionsChips from './CoursesOptionsChips';

import coursesService from '../services/courses'
import choreographiesService from '../services/choreographies'

const SectionAdminAddingFolder = ({
    onClick
}) => {
    const navigate = useNavigate();

    const [courseImage, setCourseImage] = useState(null);
    const [isCourse, setIsCourse] = useState(true); // If false, it's a dance
    const [title, setTitle] = useState("");

    // For dance upload, we need to add a choreography for a course
    // (e.g. Salsa, Bachata, etc.)
    const [currentCourseId, setCurrentCourseId] = useState(null);

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleCreateCourse = async () => {
        if (!courseImage || !title) {
            alert("Please provide a title and upload an image.");
            return;
        }
    
        const fileName = title;
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

    const handleCreateChoreography = async () => {
        if (!courseImage || !title || !currentCourseId) {
            alert("Please provide a title, upload an image, and select a course.");
            return;
        }
    
        const title = title;
        const courseId = currentCourseId;
        const coverImage = courseImage;
        const folder = "/"; // courseTitle;
    
        try {
            await choreographiesService.createChoreography(
                title,
                courseId, 
                coverImage, 
                folder
            );
            console.log("Choreography created successfully!");
            navigate(-1); // Go back to the previous page
        } catch (error) {
            console.error("Error creating choreography:", error);
            alert("An error occurred. Please try again.");
        }
    }
    

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
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type = "text"
                        />
                        <div className="type">
                            <div>add this folder as a new</div>
                            <SwitchButton
                                nameButtonLeft = "Course"
                                nameButtonRight = "Dance"
                                onLeftClick={() => setIsCourse(true)}
                                onRightClick={() => setIsCourse(false)}
                                contentRight={
                                    <CoursesOptionsChips
                                        onSelectedCourseChanged={(id) => setCurrentCourseId(id)}
                                        title="in this course:"
                                    />
                                }
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
                            : handleCreateChoreography()
                        }
                        disabled={
                            isCourse 
                                ? !courseImage || !title
                                : !courseImage || !title || !currentCourseId
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default SectionAdminAddingFolder