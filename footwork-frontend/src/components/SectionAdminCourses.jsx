import { useEffect, useState } from 'react'

import TileAdmin from './TileAdmin'
import Button from './Button'

import currentUserService from '../services/currentUser'
import coursesService from '../services/courses'

import iconCheckGreen from '../assets/icons/check-green.png'
import iconPlus from '../assets/icons/plus.png'

const SectionAdminCourses = ({
    onCourseClick,
    onManageStudentsClick,
    onAddFolderSubmitted,
    onAddVideoSubmitted
}) => {
    const [userFirstName, setUserFirstName] = useState(null)
    const [courses, setCourses] = useState([])
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const firstName = currentUserService.getFirstName()
        setUserFirstName(firstName)

        coursesService.getAll()
            .then((response) => {
                setCourses(response.data)
            }).catch((error) => {
                console.log(error)
            })

        const checkMobile = () => {
             setIsMobile(window.matchMedia('(max-width: 600px)').matches);
        };
        checkMobile(); // Check on initial load
        window.addEventListener('resize', checkMobile); // Update on resize
        return () => {
            window.removeEventListener('resize', checkMobile); // Cleanup
        };
    }, [])

    return (
        <div className="adminDashboard">
            <div className="headerContainer">
                <div className="titleSubtitle">
                    {isMobile 
                        ? <h1>Hi {userFirstName}</h1> 
                        : <h2>Hi {userFirstName}</h2>
                    }
                </div>
                <div className="buttonContainer">
                    <Button 
                        text="Manage students"
                        onClick={onManageStudentsClick}
                        iconName={iconCheckGreen}
                        className="btn-admin"
                    />
                    <Button 
                        text="Add folder or video"
                        onClick={() => {}}
                        iconName={iconPlus}
                        className="btn-admin"
                    />
                </div>
            </div>
            <div className="classesContainer">
                {courses.map((course) => {
                    return (
                        <TileAdmin
                            key={course.id}
                            imageUrl={course.imageUrl}
                            text={course.name}
                            onClick={() => onCourseClick(course.id)}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default SectionAdminCourses