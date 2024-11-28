import { useEffect, useState } from 'react';
import NavbarProfile from '../components/NavbarProfile';
import SectionStudentProfile from '../components/SectionStudentProfile';
import SectionStudentReview from '../components/SectionStudentReview';

const Page = {
    HOME: 'home',
    PROFILE: 'profile',
};

const StudentUnverifiedPage = () => {
    const [currentPage, setCurrentPage] = useState(Page.HOME);

    useEffect(() => {
        // Push initial state
        window.history.replaceState({ page: currentPage }, '');
        
        // Handle "back" and "forward" navigation
        const handlePopState = (event) => {
            const state = event.state;
            if (state && state.page) {
                setCurrentPage(state.page);
            }
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    // Custom navigation handler, not real navigation
    const navigateTo = (page) => {
        window.history.pushState({ page }, '');
        setCurrentPage(page);
        console.log('Navigated to', page)
    };    

    return (
        <div>
            <NavbarProfile onClick={() => navigateTo(Page.PROFILE)} />
            <div className="studentHomepage">
                {currentPage === Page.HOME && <SectionStudentReview/>}

                {currentPage === Page.PROFILE && <SectionStudentProfile 
                    onBack={() => navigateTo(Page.HOME)}
                />}
            </div>
        </div>
    );
};

export default StudentUnverifiedPage;
