import { useState, useEffect } from 'react'
import TileAdmin from './TileAdmin'
import Button from './Button'
import TitleWithArrow from './TitleWithArrow'
import PopUpAdd from "../components/PopUpAdd";
import iconPlus from '../assets/icons/plus.png'
import choreographiesService from '../services/choreographies'

const SectionAdminCourseChoreographies = ({
    onClick, 
    currentCourseId,
    onAddFolderClick,
    onAddVideoClick
}) => {
    const [choreographies, setChoreographies] = useState([])
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    // Handlers for opening and closing the popup
    const showPopup = () => setIsPopupVisible(true);
    const hidePopup = () => setIsPopupVisible(false);

    const chunkArray = (array, size) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += size) {
            chunks.push(array.slice(i, i + size));
        }
        return chunks;
    };
    
    useEffect(() => {
        choreographiesService.getAll()
            .then((response) => {
                setChoreographies(response.data.filter(choreography => choreography.courseId === currentCourseId))
            }).catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div className="adminDashboard">
            <div className="headerContainer courseChoreographies">
                <TitleWithArrow
                    title = "***PLACEHOLDER"
                    subtitle = "Available dances in this class"
                    /* ***TODO GIANLUCA PARSE BACK */
                />
                <Button 
                        text="Add folder or video"
                        onClick={showPopup}
                        iconName={iconPlus}
                        className="btn-admin"
                    />
            </div>
            <div className="allClasses">
                {chunkArray(choreographies, 3).map((chunk, index) => (
                    <div className="classesContainer" key={index}>
                        {chunk.map((choreography) => (
                            <TileAdmin
                                key={choreography.id}
                                imageUrl={choreography.imageUrl}
                                text={choreography.title}
                                onClick={() => onCourseClick(choreography.id)}
                            />
                        ))}
                    </div>
                ))}
            </div>
            {isPopupVisible && <PopUpAdd 
                onClose={hidePopup} 
                onAddFolderClick={onAddFolderClick} 
                onAddVideoClick={onAddVideoClick} 
            />}
        </div>
    );
}

export default SectionAdminCourseChoreographies