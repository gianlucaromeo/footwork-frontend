import { useState } from 'react'
import SectionStudentCourses from '../components/SectionStudentCourses'
import NavbarProfile from '../components/NavbarProfile'
import SectionStudentProfile from '../components/SectionStudentProfile'
import SectionStudentChoreographies from '../components/SectionStudentChoreographies'

// Create an enum:
const Page = {
    ALL_COURSES: 'all-courses',
    COURSE: 'course',
    COURSE_CHOREOGRAPHIES: 'course-choreographies',
    VIDEOS: 'videos',
    VIDEO: 'video',
    PROFILE: 'profile',
}

const StudentHomePage = () => {
    const [currentPage, setCurrentPage] = useState(Page.ALL_COURSES)
    const [currentCourseId, setCurrentCourseId] = useState(null)

    return (
        <div>
            <NavbarProfile onClick={() => setCurrentPage(Page.PROFILE)} />
            <div className="studentHomepage">
                { currentPage === Page.ALL_COURSES &&
                    <SectionStudentCourses 
                        onCourseClick={(courseId) => {
                            setCurrentPage(Page.COURSE_CHOREOGRAPHIES)
                            setCurrentCourseId(courseId)
                        }}
                     />
                }

                { currentPage === Page.COURSE_CHOREOGRAPHIES && 
                    <SectionStudentChoreographies
                        currentCourseId={currentCourseId}
                    />
                }

                { currentPage === Page.VIDEOS && <div>***Videos</div> }

                { currentPage === Page.VIDEO && <div>***Video</div> }

                { currentPage === Page.PROFILE && <SectionStudentProfile /> }
            </div>
        </div>

    );
}

export default StudentHomePage