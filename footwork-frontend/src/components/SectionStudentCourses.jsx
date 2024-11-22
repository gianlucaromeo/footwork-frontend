import { useEffect, useState } from 'react'

import Tile from './Tile'

import currentUserService from '../services/currentUser'
import coursesService from '../services/courses'

const SectionStudentCourses = ({onCourseClick}) => {
    const [userFirstName, setUserFirstName] = useState(null)
    const [courses, setCourses] = useState([])
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const firstName = currentUserService.getFirstName()
        setUserFirstName(firstName)

        coursesService.getEnrolledCourses()
            .then((response) => {
                setCourses(response.data)
            }).catch((error) => {
                console.log(error)
            })

        const checkMobile = () => {
             setIsMobile(window.matchMedia('(max-width: 600px)').matches);
        };
        checkMobile(); // Check on initial load
        window.addEventListener('resize', checkMobile); // Update on resize
        return () => {
            window.removeEventListener('resize', checkMobile); // Cleanup
        };
    }, [])

    return (
        <div className="studentDashboard">
            <div className="headerContainer">
                <div className="titleSubtitle">
                    {isMobile ? <h1>Hi {userFirstName}</h1> : <h2>Hi {userFirstName}</h2>}
                    <div className={isMobile ? "copy-medium-reg" : "copy-large-reg"}>Your available dance classes</div>
                </div>
            </div>
            <div className="classesContainer">
                {courses.map((course) => {
                    return (
                        <Tile
                            key={course.id}
                            imageUrl={course.imageUrl}
                            text={course.name}
                            onClick={() => onCourseClick(course.id)}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default SectionStudentCourses