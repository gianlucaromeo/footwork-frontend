import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import choreographiesService from '../services/choreographies';
import videosService from '../services/videos';
import Button from './Button';
import TitleWithArrow from './TitleWithArrow';
import UploadVideo from './UploadVideo';
import InputField from './InputField';
import CoursesOptionsChips from './CoursesOptionsChips';
import Chip from './Chip';

// Import the image from the assets folder
import coverImage from '../assets/images/placeholder-video.jpg'

const SectionAdminAddingVideo = ({
    onClick
}) => {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(false);

    const [title, setTitle] = useState("");
    const [video, setVideo] = useState(null);
    const [choreographies, setChoreographies] = useState([]);
    const [titleState, setTitleState] = useState("default"); // State for validation

    const [currentCourseId, setCurrentCourseId] = useState(null);
    const [currentChoreographyId, setCurrentChoreographyId] = useState(null);

    const handleTitleBlur = () => {
        if (!title.trim()) {
            setTitleState("error"); // Set state to error if the title is empty
        } else {
            setTitleState("valid"); // Set state to valid if the title is non-empty
        }
    };

    useEffect(() => {
        choreographiesService.getAll().then((response) => {
            setChoreographies(response.data);
        }).catch((error) => {
            console.error("Error getting choreographies:", error);
        });
    }, []);

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleCreateVideo = async () => {
        console.log("Creating video...");
        console.log("Title:", title);
        console.log("Video:", video);
        console.log("Course ID:", currentCourseId);
        console.log("Choreography ID:", currentChoreographyId);

        const imageFile = await fetch(coverImage)
            .then((res) => res.blob())
            .then((blob) => new File([blob], "placeholder-video.jpg", { type: "image/jpeg" }));
        
        const folder = "/"

        try {
            // Sending the static image URL (coverImage) to the backend
            await videosService.createVideo(
                title,
                currentChoreographyId,
                video,
                imageFile,
                folder,
            );
            console.log("Video created successfully!");
            navigate(-1);
        } catch (error) {
            console.error("Error creating video:", error);
        }
    };

    const handleCourseChange = (courseId) => {
        setCurrentCourseId(courseId);
    };

    const currentChoreographyBelongsToCurrentCourse = () => {
        return choreographies.some(
            (choreography) =>
                choreography.id === currentChoreographyId &&
                choreography.courseId === currentCourseId
        );
    };

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
            <div className="headerContainer">
                <TitleWithArrow
                    title="Add Video"
                    subtitle="Upload your video in .mp4 format"
                    onClick={handleGoBack}
                />
            </div>
            <div className="centered">
                <div className="contentContainer addFolderVideo">
                    <div className="data">
                        <UploadVideo 
                            onFileUploaded={(file) => setVideo(file)}
                        />
                        <div className="titleType">
                            <InputField
                                state={titleState}
                                label="title*"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                onBlur={handleTitleBlur}
                                type="text"
                                errorMessage={titleState === "error" ? "Please provide a title" : ""}
                            />
                            <div className="type">
                                <CoursesOptionsChips
                                    onSelectedCourseChanged={(id) => handleCourseChange(id)}
                                    title="course*"
                                />
                            </div>
                            <div className="selectedDanceContainer">
                                    <div className="titleDescription">
                                        <div className="copy-medium-reg">dance*</div>
                                    </div>
                                    <div className="chipsContainer">
                                        {choreographies.filter(c => c.courseId === currentCourseId).map(choreography => (
                                            <Chip
                                                key={choreography.id}
                                                text={choreography.title}
                                                isSelected={currentChoreographyId === choreography.id}
                                                onClick={() => setCurrentChoreographyId(choreography.id)}
                                            />
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="buttonContainer">
                        <Button
                            className="btn-text s"
                            text="Cancel"
                            onClick={handleGoBack}
                        />
                        <Button
                            className="btn-primary s"
                            text="Save"
                            onClick={handleCreateVideo}
                            disabled={!video || !title || !currentCourseId || !currentChoreographyId || !currentChoreographyBelongsToCurrentCourse()}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionAdminAddingVideo;
