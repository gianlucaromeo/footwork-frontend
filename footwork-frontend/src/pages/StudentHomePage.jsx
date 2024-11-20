import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StudentCourses from '../components/StudentCourses'
import NavbarProfile from '../components/NavbarProfile'

// Create an enum:
const Page = {
    ALL_COURSES: 'all-courses',
    COURSE: 'course',
    VIDEOS: 'videos',
    VIDEO: 'video',
    PROFILE: 'profile',
}

const StudentHomePage = () => {
    const [currentPage, setCurrentPage] = useState(Page.ALL_COURSES)

    const navigate = useNavigate()

    return (
        <div>
            <NavbarProfile onClick={() => navigate('/student/profile')} />
            <div>***Profile Button</div>
            { currentPage === Page.ALL_COURSES && <StudentCourses /> }
        </div>
    );
}

export default StudentHomePage