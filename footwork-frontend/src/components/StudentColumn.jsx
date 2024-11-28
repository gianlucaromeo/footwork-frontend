import { useState, useEffect } from "react";
import StudentRow from '../components/StudentRow';

import adminsService from '../services/admins';
import coursesService from '../services/courses';
import enrollmentsService from '../services/enrollments';

const StudentColumn = () => {
  // State for managing students
  const [students, setStudents] = useState([]);
  const [enrollments, setEnrollments] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    coursesService.getAll()
      .then((response) => {
          setCourses(response.data);
      }).catch((error) => {
          console.log(error);
      });
  }, []);


  const fetchStudents = () => {
    adminsService.getAllStudents()
      .then((response) => {
        setStudents(response.data);
      }).catch((error) => {
        console.log(error);
    });
  }

  useEffect(() => {
    fetchStudents()
  }, []);

  const fetchEnrollments = () => {
    enrollmentsService.getAllEnrollments()
      .then((response) => {
        setEnrollments(response.data);
      }).catch((error) => {
        console.log(error);
    });
  }

  useEffect(() => {
    fetchEnrollments()
  }, []);

  // Handle delete icon click
  const handleDelete = (studentId) => {
    adminsService.deleteStudentAccount(studentId)
        .then(() => {
            console.log(`Deleted student ${studentId}`);
            fetchStudents();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
  };

  const handleOnCourseChange = (studentId, courseId, checked) => {
    if (checked) {
      enrollmentsService.createEnrollment(courseId, studentId)
        .then(() => {
          fetchEnrollments()
        }).catch((error) => {
          console.log(error);
        });
    } else {
      enrollmentsService.deleteEnrollment(courseId, studentId)
        .then(() => {
          fetchEnrollments()
        }).catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <div style={{ width: "100%"}}>
      {students
      .filter(student => student.verifiedByAdmin)
      .map((student, index) => (
        <StudentRow
          key={student.id}
          index={index}
          studentId={student.id}
          lastName={student.lastName}
          firstName={student.firstName}
          courses={courses}
          enrollments={enrollments}
          onCoursesChange={handleOnCourseChange}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default StudentColumn;
