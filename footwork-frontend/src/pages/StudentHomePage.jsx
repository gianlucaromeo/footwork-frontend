import { useEffect, useState } from 'react';
import SectionStudentCourses from '../components/SectionStudentCourses';
import NavbarProfile from '../components/NavbarProfile';
import SectionStudentProfile from '../components/SectionStudentProfile';
import SectionStudentChoreographies from '../components/SectionStudentChoreographies';

// Create an enum:
const Page = {
    ALL_COURSES: 'all-courses',
    COURSE: 'course',
    COURSE_CHOREOGRAPHIES: 'course-choreographies',
    VIDEOS: 'videos',
    VIDEO: 'video',
    PROFILE: 'profile',
};

const StudentHomePage = () => {
    const [currentPage, setCurrentPage] = useState(Page.ALL_COURSES);
    const [currentCourseId, setCurrentCourseId] = useState(null);

    useEffect(() => {
        // Push initial state
        window.history.replaceState({ page: currentPage }, '');
        
        // Handle "back" and "forward" navigation
        const handlePopState = (event) => {
            const state = event.state;
            if (state && state.page) {
                setCurrentPage(state.page);
                setCurrentCourseId(state.courseId || null); // Optional: handle courseId
            }
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    // Custom navigation handler, not real navigation
    const navigateTo = (page, courseId = null) => {
        // Push new state to history
        window.history.pushState({ page, courseId }, '');
        setCurrentPage(page);
        setCurrentCourseId(courseId);
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

                {currentPage === Page.COURSE_CHOREOGRAPHIES && (
                    <SectionStudentChoreographies currentCourseId={currentCourseId} />
                )}

                {currentPage === Page.VIDEOS && <div>***Videos</div>}

                {currentPage === Page.VIDEO && <div>***Video</div>}

                {currentPage === Page.PROFILE && <SectionStudentProfile />}
            </div>
        </div>
    );
};

export default StudentHomePage;
