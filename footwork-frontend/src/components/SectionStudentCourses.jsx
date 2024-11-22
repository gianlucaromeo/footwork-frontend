import { useEffect, useState } from 'react'

import Tile from './Tile'

import currentUserService from '../services/currentUser'
import coursesService from '../services/courses'

const SectionStudentCourses = () => {
    const [userFirstName, setUserFirstName] = useState(null)
    const [courses, setCourses] = useState([])

    useEffect(() => {
        const firstName = currentUserService.getFirstName()
        setUserFirstName(firstName)

        coursesService.getEnrolledCourses()
            .then((response) => {
                setCourses(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div className="studentDashboard">
            <div className="headerContainer">
                <div className="titleSubtitle">
                    <h2>Hi {userFirstName}</h2>
                    <div className="copy-large-reg">Your available dance classes</div>
                </div>
            </div>
            <div className="classesContainer">
                {courses.map((course) => {
                    return (
                        <Tile
                            key={course.id}
                            imageUrl={course.imageUrl}
                            text={course.name}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default SectionStudentCourses