import { useState, useEffect } from 'react'
import TileAdmin from './TileAdmin'
import Button from './Button'
import TitleWithArrow from './TitleWithArrow'
import adminService from '../services/admins'
import iconPlus from '../assets/icons/plus.png'

const SectionAdminCourseChoreographies = ({onClick, currentCourseId}) => {
    const [choreographies, setChoreographies] = useState([])
    
    useEffect(() => {
        adminService.getAllVideos()
            .then((response) => {
                const videos = response.data
                const choreographies = videos.map((video) => video.choreography)
                const filteredChoreographies = choreographies
                    .filter((choreography) => 
                        choreography.courseId === currentCourseId
                )
                setChoreographies(filteredChoreographies)
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
                        onClick={() => {}}
                        iconName={iconPlus}
                        className="btn-admin"
                    />
            </div>
            <div className="classesContainer">
                {choreographies.map((choreography) => (
                    <TileAdmin
                        key={choreography.id}
                        imageUrl={choreography.imageUrl}
                        text={choreography.title}
                        onClick={() => onClick(choreography.id)}
                    />
                ))}
            </div>
        </div>
    );
}

export default SectionAdminCourseChoreographies