import { useState } from 'react'
import SectionStudentCourses from '../components/SectionStudentCourses'
import NavbarProfile from '../components/NavbarProfile'
import SectionStudentProfile from '../components/SectionStudentProfile'

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
            <NavbarProfile onClick={() => setCurrentPage(Page.PROFILE)} />
            <div>***Profile Button</div>
            { currentPage === Page.ALL_COURSES && <SectionStudentCourses /> }
            { currentPage === Page.COURSE && <div>***Course</div> }
            { currentPage === Page.VIDEOS && <div>***Videos</div> }
            { currentPage === Page.VIDEO && <div>***Video</div> }
            { currentPage === Page.PROFILE && <SectionStudentProfile /> }
        </div>
    );
}

export default StudentHomePage