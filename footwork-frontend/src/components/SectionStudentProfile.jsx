import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import CardCoursesStudentProfile from './CardCoursesStudentProfile';
import CardInformation from './CardInformation';
import TitleWithArrow from './TitleWithArrow';
import Button from './Button';
import deleteIcon from '../assets/icons/delete-white.png';

import studentsService from '../services/students';
import coursesService from '../services/courses';
import currentUserService from '../services/currentUser';

const SectionStudentProfile = () => {
    const [student, setStudent] = useState({});
    const [enrolledCourses, setEnrolledCourses] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        studentsService.getProfile()
            .then((response) => {
                setStudent(response.data);
            }).catch((error) => {
                console.log(error);
            });
    })

    useEffect(() => {
        coursesService.getEnrolledCourses()
            .then((response) => {
                setEnrolledCourses(response.data);
            }).catch((error) => {
                console.log(error);
            });
    })

    return (
        <div className="studentProfile">
            <div className="headerContainer profile">
                <TitleWithArrow
                    title = "Back"
                />
            </div>
            <div className="cardContainer">
                <CardInformation
                    firstName={student.firstName}
                    lastName={student.lastName}
                    email={student.email}
                />
                <CardCoursesStudentProfile />
            </div>
            <div className="mainButtonContainer">
                <Button 
                    iconName ={deleteIcon}
                    className="btn-text s"
                    text="Delete Account"
                />
                <Button 
                    className="btn-primary s"
                    text="Logout"
                    onClick={() => {
                        currentUserService.clearUser()
                        navigate("/login")
                    }}
                />
            </div>
        </div>
    )
}

export default SectionStudentProfile