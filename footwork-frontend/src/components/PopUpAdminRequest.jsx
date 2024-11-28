import { useEffect, useState } from "react";
import Button from './Button';
import CardRequest from "./CardRequest";
import adminsService from '../services/admins';
import enrollmentsService from "../services/enrollments";
import coursesService from "../services/courses";

const PopUpAdminRequest = ({ onClose }) => {
    const [unverifiedStudents, setUnverifiedStudents] = useState([]);
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const [courses, setCourses] = useState([]);

    const fetchAllStudents = () => {
        adminsService
            .getAllStudents()
            .then((response) => {
                setUnverifiedStudents(response.data.filter(student =>
                    !student.verifiedByAdmin
                ));
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const fetchEnrollments = () => {
        enrollmentsService
            .getAllEnrollments()
            .then((response) => {
                setEnrolledCourses(response.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const fetchCourses = () => {
        coursesService
            .getAll()
            .then((response) => {
                setCourses(response.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    useEffect(() => {
        fetchAllStudents();
        fetchEnrollments();
        fetchCourses();
    }, []); // Fetch once on component mount

    const handleOnEnrollmentsChange = (studentId, courseId, checked) => {
        console.log('studentId:', studentId, 'courseId:', courseId, 'checked:', checked);

        const updateEnrollments = () => {
            if (checked) {
                enrollmentsService.createEnrollment(courseId, studentId)
                    .then(() => {
                        console.log('Enrollment created');
                        fetchEnrollments(); // Re-fetch enrollments after successful creation
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
            } else {
                enrollmentsService.deleteEnrollment(courseId, studentId)
                    .then(() => {
                        console.log('Enrollment deleted');
                        fetchEnrollments(); // Re-fetch enrollments after successful deletion
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
            }
        }

        updateEnrollments();
    }

    const handleStudentVerifiedByAdmin = (studentId) => {
        adminsService.verifyStudent(studentId)
            .then(() => {
                console.log('Student verified');
                fetchAllStudents(); // Re-fetch students after successful verification
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <div className="popupOverlay" onClick={onClose}>
            <div className="popupContainer userRequest" onClick={(e) => e.stopPropagation()}>
                <div className="titleButton">
                    <h2>Request(s)</h2>
                    <Button 
                        text="cancel" 
                        className="btn-text s"
                        onClick={onClose} 
                    />
                </div>
                <CardRequest 
                    students={unverifiedStudents}
                    enrollments={enrolledCourses}
                    courses={courses}
                    onEnrollmentChanged={handleOnEnrollmentsChange}
                    onStudentVerified={handleStudentVerifiedByAdmin}
                />
            </div>
        </div>
    );
};

export default PopUpAdminRequest;