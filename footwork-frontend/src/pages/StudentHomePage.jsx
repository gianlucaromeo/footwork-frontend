import { useState } from 'react'
import StudentCourses from '../components/StudentCourses'

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

    return (
        <div>
            <div>***Navbar</div>
            <div>***Profile Button</div>
            { currentPage === Page.ALL_COURSES && <StudentCourses /> }
        </div>
    );
}

export default StudentHomePage