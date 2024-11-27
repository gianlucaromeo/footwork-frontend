import { useState, useEffect } from 'react'

import Tile from './Tile'
import TitleWithArrow from './TitleWithArrow'

import studentsService from '../services/students'
import coursesService from '../services/courses'

const SectionStudentCourseChoreographies = ({
    onClick,
    onBack, 
    currentCourseId
}) => {
    const [choreographies, setChoreographies] = useState([])
    const [courseName, setCourseName] = useState('')
    
    useEffect(() => {
        studentsService.getAllVideos()
            .then((response) => {
                const videos = response.data
                const choreographies = videos.map((video) => video.choreography)
                const filteredChoreographies = choreographies
                    .filter((choreography) => 
                        choreography.courseId === currentCourseId
                )
                // Remove duplicates with same ids
                setChoreographies([...new Map(filteredChoreographies.map(item => [item.id, item])).values()])
            }).catch((error) => {
                console.log(error)
            })        
    }, [])

    useEffect(() => {
        coursesService.getAll()
            .then((response) => {
                const courses = response.data
                const course = courses.find((course) => course.id === currentCourseId)
                setCourseName(course.name)
            }).catch((error) => {
                console.log(error)
            }
        )
    })

    return (
        <div className="studentDashboard">
            <div className="headerContainer">
                <TitleWithArrow
                    title = {courseName}
                    subtitle = "Available dances in this class"
                    onClick = {onBack}
                />
            </div>
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