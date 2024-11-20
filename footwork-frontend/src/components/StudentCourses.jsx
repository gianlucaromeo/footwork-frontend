import { useEffect, useState } from 'react'
import currentUserService from '../services/currentUser'

const StudentCourses = () => {
    const [userFirstName, setUserFirstName] = useState(null)

    useEffect(() => {
        const firstName = currentUserService.getFirstName()
        setUserFirstName(firstName)
    }, [])

    return (
        <div>
            <h3>Hi {userFirstName}</h3>
            <div>Your available courses</div>
        </div>
    );
}

export default StudentCourses