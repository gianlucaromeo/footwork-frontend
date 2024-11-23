import { useEffect, useState } from 'react'

import AdminManageStudentsPage from './AdminManageStudentsPage'

import NavbarProfile from '../components/NavbarProfile'

import SectionAdminCourses from '../components/SectionAdminCourses'
import SectionAdminCourseChoreographies from '../components/SectionAdminCourseChoreographies'
import SectionAdminChoreographyVideos from '../components/SectionAdminChoreographyVideos'

const Page = {
    ALL_COURSES: 'all-courses',
    COURSE: 'course',
    COURSE_CHOREOGRAPHIES: 'course-choreographies',
    CHOREOGRAPHY_VIDEOS: 'choreography-video',
    VIDEO: 'video',
    PROFILE: 'profile',
    MANAGE_STUDENTS: 'manage-students',
    ADD_FOLDER: 'add-course',
    ADD_VIDEO: 'add-video',
}

const AdminHomePage = () => {
    const [currentPage, setCurrentPage] = useState(Page.ALL_COURSES)
    const [currentCourseId, setCurrentCourseId] = useState(null)
    const [currentChoreographyId, setCurrentChoreographyId] = useState(null)

    useEffect(() => {
        // Push initial state
        window.history.replaceState({ page: currentPage }, '')
        
        // Handle "back" and "forward" navigation
        const handlePopState = (event) => {
            const state = event.state
            if (state && state.page) {
                setCurrentPage(state.page)
                setCurrentCourseId(state.courseId || null)
                setCurrentChoreographyId(state.choreographyId || null)
            }
        }

        window.addEventListener('popstate', handlePopState)
        return () => window.removeEventListener('popstate', handlePopState)
    }, [])

    // Custom navigation handler, not real navigation
    const navigateTo = (page, courseId = null, choreographyId = null) => {
        window.history.pushState({ page, courseId, choreographyId }, '')
        setCurrentPage(page)
        setCurrentCourseId(courseId)
        setCurrentChoreographyId(choreographyId)
        console.log('Navigated to', page, courseId, choreographyId)
    }

    return (
        <div>
            <NavbarProfile onClick={() => navigateTo(Page.PROFILE)} />
            
            {currentPage === Page.ALL_COURSES && 
                <SectionAdminCourses
                    onCourseClick={(courseId) => navigateTo(
                        Page.COURSE_CHOREOGRAPHIES, 
                        courseId
                    )}
                    onManageStudentsClick={() => 
                        navigateTo(Page.MANAGE_STUDENTS)
                    }
                />
            }
            
            {currentPage === Page.MANAGE_STUDENTS &&
                <AdminManageStudentsPage />
            }
            
            {currentPage === Page.ADD_FOLDER && <div>***Add Folder</div>}
            
            {currentPage === Page.ADD_VIDEO && <div>***Add Video</div>}
            
            {currentPage === Page.COURSE && <div>***Course</div>}
            
            {currentPage === Page.COURSE_CHOREOGRAPHIES && 
                <SectionAdminCourseChoreographies
                    currentCourseId={currentCourseId}
                    onClick={
                        (choreographyId) => {
                            navigateTo(
                                Page.CHOREOGRAPHY_VIDEOS,
                                currentCourseId,
                                choreographyId
                            )
                        }
                    } 
                />
            }

            {currentPage === Page.CHOREOGRAPHY_VIDEOS && 
                <SectionAdminChoreographyVideos
                    choreographyId={currentChoreographyId}
                    onBack={() => navigateTo(
                        Page.COURSE_CHOREOGRAPHIES,
                        currentCourseId
                    )}
                />
            }

            {currentPage === Page.VIDEO && <div>***Video</div>}

            {currentPage === Page.PROFILE && <div>***Profile</div>}
        </div>
    )
}

export default AdminHomePage