import { useEffect, useState } from 'react';
import SectionStudentCourses from '../components/SectionStudentCourses';
import NavbarProfile from '../components/NavbarProfile';
import SectionStudentProfile from '../components/SectionStudentProfile';
import SectionStudentCourseChoreographies from '../components/SectionStudentCourseChoreographies';
import SectionStudentChoreographyVideos from '../components/SectionStudentChoreographyVideos';

const Page = {
    ALL_COURSES: 'all-courses',
    COURSE: 'course',
    COURSE_CHOREOGRAPHIES: 'course-choreographies',
    CHOREOGRAPHY_VIDEOS: 'choreography-video',
    VIDEO: 'video',
    PROFILE: 'profile',
};

const StudentHomePage = () => {
    const [currentPage, setCurrentPage] = useState(Page.ALL_COURSES);
    const [currentCourseId, setCurrentCourseId] = useState(null);
    const [currentChoreographyId, setCurrentChoreographyId] = useState(null);

    useEffect(() => {
        // Push initial state
        window.history.replaceState({ page: currentPage }, '');
        
        // Handle "back" and "forward" navigation
        const handlePopState = (event) => {
            const state = event.state;
            if (state && state.page) {
                setCurrentPage(state.page);
                setCurrentCourseId(state.courseId || null);
                setCurrentChoreographyId(state.choreographyId || null);
            }
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    // Custom navigation handler, not real navigation
    const navigateTo = (page, courseId = null, choreographyId = null) => {
        window.history.pushState({ page, courseId, choreographyId }, '');
        setCurrentPage(page);
        setCurrentCourseId(courseId);
        setCurrentChoreographyId(choreographyId);
        console.log('Navigated to', page, courseId, choreographyId);
    };    

    return (
        <div>
            <NavbarProfile onClick={() => navigateTo(Page.PROFILE)} />
            <div className="studentHomepage">
                {currentPage === Page.ALL_COURSES && (
                    <SectionStudentCourses
                        onCourseClick={(courseId) => navigateTo(Page.COURSE_CHOREOGRAPHIES, courseId)}
                    />
                )}

                {currentPage === Page.COURSE_CHOREOGRAPHIES && 
                    <SectionStudentCourseChoreographies onClick={
                        (choreographyId) => {
                            navigateTo(
                                Page.CHOREOGRAPHY_VIDEOS,
                                currentCourseId,
                                choreographyId
                            );
                        }
                    } />
                }

                {currentPage === Page.CHOREOGRAPHY_VIDEOS && (
                    <SectionStudentChoreographyVideos 
                        onBack={() => navigateTo(
                            Page.COURSE_CHOREOGRAPHIES,
                            currentCourseId
                        )}
                    />
                )}

                {currentPage === Page.VIDEO && <div>***Video</div>}

                {currentPage === Page.PROFILE && <SectionStudentProfile />}
            </div>
        </div>
    );
};

export default StudentHomePage;
