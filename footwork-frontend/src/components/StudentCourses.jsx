import { useEffect, useState } from 'react'
import currentUserService from '../services/currentUser'
import coursesService from '../services/courses'

const StudentCourses = () => {
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
        <div>
            <h3>Hi {userFirstName}</h3>
            <div>Your available courses</div>
        </div>
    );
}

export default StudentCourses