import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import Button from './Button'
import TitleWithArrow from './TitleWithArrow'
import UploadPicture from './UploadPicture'
import InputField from './InputField'
import deleteIcon from '../assets/icons/delete-white.png'
import PopUpDelete from "./PopUpDelete";
import PopUpDiscard from "./PopUpDiscard";

import choreographiesService from '../services/choreographies'

const SectionAdminEditChoreography = ({
    courseId,
    choreographyId,
}) => {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(false);

    const [choreographyImage, setChoreographyImage] = useState(null);
    const [title, setTitle] = useState(""); // Title of the folder
    const [titleState, setTitleState] = useState("default"); // State for validation

    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [isCancelPopupVisible, setIsCancelPopupVisible] = useState(false);

    // Handlers for opening and closing the popup
    const showPopup = () => setIsPopupVisible(true);
    const hidePopup = () => setIsPopupVisible(false);

    const showCancelPopup = () => setIsCancelPopupVisible(true);
    const hideCancelPopup = () => setIsCancelPopupVisible(false);

    useEffect(() => {
        choreographiesService.getAll()
            .then(async (response) => {
                const choreography = response.data.find(choreography => choreography.id === choreographyId);
                if (choreography) {
                    setTitle(choreography.title);
                    const imageUrl = choreography.imageUrl;
                    if (imageUrl) {
                        try {
                            const response = await fetch(imageUrl);
                            if (!response.ok) throw new Error('Failed to fetch image');
        
                            const blob = await response.blob();
                            const file = new File([blob], "image.jpg", { type: blob.type });
                            setChoreographyImage(file);
                        } catch (err) {
                            console.error('Error fetching image:', err);
                        }
                    }
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    

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

    const handleUpdateChoreography = async () => {
        if (!choreographyImage || !title || !courseId) {
            alert("Please provide a title and upload an image");
            return;
        }
    
        const coverImage = choreographyImage;
        const folder = "/"; 
    
        try {
            await choreographiesService.updateChoreography(
                choreographyId,
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
                            onFileUploaded={(file) => setChoreographyImage(file)} 
                            initialImage={choreographyImage}
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
                                        handleUpdateChoreography()
                                    }
                                    disabled={
                                        !choreographyImage || !title || !courseId
                                    }
                                />
                                <Button
                                        className="btn-text s"
                                        text="delete"
                                        iconName={deleteIcon}
                                        onClick={showPopup}
                                />
                            </>
                        ) : (
                            <>
                                <Button
                                    className="btn-text s"
                                    text="delete"
                                    iconName={deleteIcon}
                                    onClick={showPopup}
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
                                        handleUpdateChoreography()
                                    }
                                    disabled={
                                        !choreographyImage || !title || !courseId
                                    }
                                />
                            </>
                        )}
                    </div>
                </div>
            </div>
            {isPopupVisible && 
                <PopUpDelete 
                    onClose={hidePopup} 
                    title = "Folder?"
                    text={`Are you sure you want to delete the whole folder?`}
                    /* ***TODO: onDelete Folder? */
                    onDelete={() => {}}
                />}
            {/* isCancelPopupVisible && 
                <PopUpDiscard
                    onClose={hideCancelPopup}
                    // TODO: onDiscard go back to page from before
                    onDiscard={() => {}}
                /> */}
        </div>
    );
}

export default SectionAdminEditChoreography