import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import Button from './Button'
import TitleWithArrow from './TitleWithArrow'
import UploadPicture from './UploadPicture'
import InputField from './InputField'
import deleteIcon from '../assets/icons/delete-white.png'

import coursesService from '../services/courses'
import choreographiesService from '../services/choreographies'

const SectionAdminEditFolder = ({
    onClick
}) => {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(false);

    const [courseImage, setCourseImage] = useState(null);
    const [isCourse, setIsCourse] = useState(true); // If false, it's a dance
    const [title, setTitle] = useState("");
    const [titleState, setTitleState] = useState("default"); // State for validation

    const handleTitleBlur = () => {
        if (!title.trim()) {
            setTitleState("error"); // Set state to error if the title is empty
        } else {
            setTitleState("valid"); // Set state to valid if the title is non-empty
        }
    };

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
            console.log("Course edited successfully!");
            navigate(-1); // Go back to the previous page
        } catch (error) {
            console.error("Error editing course:", error);
            alert("An error occurred. Please try again.");
        }
    };

    const handleCreateChoreography = async () => {
        if (!courseImage || !title || !currentCourseId) {
            alert("Please provide a title and upload an image");
            return;
        }
    
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
    
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 600); // Adjust breakpoint as needed
        };
    
        checkMobile(); // Check on initial load
        window.addEventListener("resize", checkMobile); // Update on resize
        return () => {
            window.removeEventListener("resize", checkMobile); // Cleanup
        };
    }, []);

    return (
        <div className="adminDashboard">
            <div className="headerContainer addFolderVideo">
                <TitleWithArrow
                    title = "Edit Folder"
                    subtitle = "Change the background image, name or delete the folder"
                    onClick={handleGoBack}
                />
            </div>
            <div className="centered">
                <div className="contentContainer addFolderVideo">
                    <div className="data">
                        {/* ***TODO: Set image as current folder's image */ }
                        <UploadPicture 
                            onFileUploaded={(file) => setCourseImage(file)} 
                        />
                        <div className="titleType">
                            <InputField
                                state={titleState}
                                label="title*"
                                /* ***TODO: set title to current folder's title */
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                onBlur={handleTitleBlur}
                                type = "text"
                                errorMessage={titleState === "error" ? "Please provide a title" : ""}
                            />
                        </div>
                    </div>
                    <div className="buttonContainer">
                        {isMobile ? (
                            <>
                                <Button
                                    className="btn-primary s"
                                    text="Save"
                                    onClick={() =>
                                        isCourse
                                        /* ***TODO: handleEditCourse()? */
                                            ? handleCreateCourse()
                                            : handleCreateChoreography()
                                    }
                                    disabled={
                                        isCourse
                                            ? !courseImage || !title
                                            : !courseImage || !title || !currentCourseId
                                    }
                                />
                                <Button
                                        className="btn-text s"
                                        text="delete"
                                        iconName={deleteIcon}
                                        /* ***TODO: onClick={} delete */
                                />
                            </>
                        ) : (
                            <>
                                <Button
                                    className="btn-text s"
                                    text="delete"
                                    iconName={deleteIcon}
                                    /* ***TODO: onClick={} delete */
                                />
                                <Button
                                    className="btn-text s"
                                    text="Cancel"
                                    onClick={handleGoBack}
                                />
                                <Button
                                    className="btn-primary s"
                                    text="Save"
                                    onClick={() =>
                                        isCourse
                                         /* ***TODO: handleEditCourse()? */
                                            ? handleCreateCourse()
                                            : handleCreateChoreography()
                                    }
                                    disabled={
                                        isCourse
                                            ? !courseImage || !title
                                            : !courseImage || !title || !currentCourseId
                                    }
                                />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionAdminEditFolder