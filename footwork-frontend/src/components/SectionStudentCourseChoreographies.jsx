import { useState, useEffect } from 'react'
import Tile from './Tile'
import studentsService from '../services/students'

const SectionStudentCourseChoreographies = ({onClick}) => {
    const [choreographies, setChoreographies] = useState([])
    const [isMobile, setIsMobile] = useState(false)
    
    useEffect(() => {
        studentsService.getAllVideos()
            .then((response) => {
                const videos = response.data
                const choreographies = videos.map((video) => video.choreography)
                setChoreographies([...new Set(choreographies)])
            }).catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            <div className="classesContainer">
                {choreographies.map((choreography) => (
                    <Tile
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

export default SectionStudentCourseChoreographies