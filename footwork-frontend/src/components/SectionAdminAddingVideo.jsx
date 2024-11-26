import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import Button from './Button'
import TitleWithArrow from './TitleWithArrow'
import UploadVideo from './UploadVideo'
import InputField from './InputField'
import CoursesOptionsChips from './CoursesOptionsChips';
import Chip from './Chip';

import choreographiesService from '../services/choreographies'

const SectionAdminAddingVideo = ({
    onClick
}) => {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [video, setVideo] = useState(null);
    const [choreographies, setChoreographies] = useState([]);

    // For dance upload, we need to add a choreography for a course
    // (e.g. Salsa, Bachata, etc.)
    const [currentCourseId, setCurrentCourseId] = useState(null);
    const [currentChoreographyId, setCurrentChoreographyId] = useState(null);

    useEffect(() => {
        choreographiesService.getAll().then((response) => {
            setChoreographies(response.data);
        }).catch((error) => {
            console.error("Error getting choreographies:", error);
        })
    }, [])

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleCreateVideo = async () => {
        if (!courseImage || !title || !currentCourseId) {
            alert("Please provide a title, upload a video, select a course, and select a choreography.");
            return;
        }
    
        const title = title;
        const courseId = currentCourseId;
        const choreographyId = currentChoreographyId;
        const video = video;
        const folder = "/";
    
        try {
            // TODO: Implement this line
            console.log("Video added successfully!");
            navigate(-1); // Go back to the previous page
        } catch (error) {
            console.error("Error adding video choreography:", error);
            alert("An error occurred. Please try again.");
        }
    }

    const handleCourseChange = (courseId) => {
        setCurrentCourseId(courseId); // Update the current course ID
        //setCurrentChoreographyId(null); // Reset the current choreography ID
    };

    const currentChoreographyBelongsToCurrentCourse = () => {
        return choreographies.some(
            (choreography) =>
                choreography.id === currentChoreographyId &&
                choreography.courseId === currentCourseId
        );
    }

    return (
        <div className="adminDashboard">
            <div className="headerContainer">
                <TitleWithArrow
                    title = "Add Video"
                    subtitle = "Upload your video in .mp4 format"
                    onClick={handleGoBack}
                />
            </div>
            <div className="contentContainer addFolderVideo">
                <div className="data">
                    <UploadVideo 
                        onFileUploaded={(file) => setVideo(file)}
                    />
                    <div className="titleType">
                        <InputField
                            state="default"
                            label="title*"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type = "text"
                        />
                        <div className="type">
                            <CoursesOptionsChips
                                onSelectedCourseChanged={
                                    (id) => handleCourseChange(id)
                                }
                                title="course*"
                            />
                        </div>
                        <div className="type">
                        <div className="courses">
                            <div className="titleDescription">
                            <div className="copy-medium-reg">dance*</div>
                            </div>
                            {choreographies.filter(c => c.courseId === currentCourseId
                            ).map(choreography => (
                                <Chip
                                    key={choreography.id}
                                    text={choreography.title}
                                    isSelected={currentChoreographyId === choreography.id}
                                    onClick={() => setCurrentChoreographyId(
                                        choreography.id
                                    )}
                                />
                            ))}
                            </div>
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
                        onClick={() => handleCreateVideo()}
                        disabled={!video || !title || !currentCourseId || !currentChoreographyId || !currentChoreographyBelongsToCurrentCourse()
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default SectionAdminAddingVideo