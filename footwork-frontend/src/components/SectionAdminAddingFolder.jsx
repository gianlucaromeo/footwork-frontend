import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Button from './Button'
import TitleWithArrow from './TitleWithArrow'
import UploadPicture from './UploadPicture'
import InputField from './InputField'
import SwitchButton from './SwitchButton'

const SectionAdminAddingFolder = ({
    onClick
}) => {
    const navigate = useNavigate();
    const [folderTitle, setFolderTitle] = useState("");

    const handleGoBack = () => {
        navigate(-1); // Navigates to the previous page
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
                    <UploadPicture/>
                    <div className="titleType">
                        <InputField
                            state="default"
                            label="title"
                            value={folderTitle}
                            onChange={(e) => setFolderTitle(e.target.value)}
                            type = "text"
                        />
                        <div className="type">
                            <div>add this folder as a new</div>
                            <SwitchButton
                                nameButtonLeft = "Course"
                                nameButtonRight = "Dance"
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
                        // onClick={saveChanges}
                    />
                </div>
            </div>
        </div>
    );
}

export default SectionAdminAddingFolder