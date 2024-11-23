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

    adminsService.getAllStudents()
      .then((response) => {
        setStudents(response.data);
      }).catch((error) => {
        console.log(error);
    });

    enrollmentsService.getAllEnrollments()
      .then((response) => {
        setEnrollments(response.data);
      }).catch((error) => {
        console.log(error);
    });

  }, []);

  // Handle delete icon click
  const handleDelete = (id) => {
    console.log(`Delete Student ${id}`);
    setStudents(students.filter((student) => student.id !== id)); // Remove student from the list
  };

  return (
    <div>
      {students.map((student) => (
        <StudentRow
          key={student.id}
          studentId={student.id}
          lastName={student.lastName}
          firstName={student.firstName}
          courses={courses}
          enrollments={enrollments}
        />
      ))}
    </div>
  );
};

export default StudentColumn;
