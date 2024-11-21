import React, { useState } from "react";
import StudentsRows from '../components/StudentsRows';

const StudentColumns = () => {
  // State for managing students
  const [students, setStudents] = useState([
    { id: 1, lastname: "Doe", firstname: "John" },
    { id: 2, lastname: "Smith", firstname: "Jane" },
  ]);

  // Handle row click
  const handleRowClick = (id) => {
    console.log(`Student Row ${id} clicked!`);
    // Add navigation or further actions here
  };

  // Handle delete icon click
  const handleDelete = (id) => {
    console.log(`Delete Student ${id}`);
    setStudents(students.filter((student) => student.id !== id)); // Remove student from the list
  };

  return (
    <div>
      {students.map((student) => (
        <StudentsRows
          key={student.id}
          lastname={student.lastname}
          firstname={student.firstname}
          onClick={() => handleRowClick(student.id)} // Pass row click handler
          onDelete={() => handleDelete(student.id)} // Pass delete handler
        />
      ))}
    </div>
  );
};

export default StudentColumns;
