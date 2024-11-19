import { useState, useEffect } from 'react';
import CheckboxContainer from './CheckboxContainer';
import coursesService from '../services/courses';

const CourseSignUp = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState({}); // Track checkbox states

  useEffect(() => {
    console.log('Fetching courses');
    coursesService.getAll()
      .then(response => {
        console.log('Courses fetched:', response);
        setCourses(response);

        // Initialize selectedCourses state with all checkboxes unchecked
        const initialState = response.reduce((acc, course) => {
          acc[course.id] = false;
          return acc;
        }, {});
        setSelectedCourses(initialState);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  // Handle checkbox state changes
  const handleCheckboxChange = (courseId, checked) => {
    setSelectedCourses(prevState => ({
      ...prevState,
      [courseId]: checked,
    }));
  };

  return (
    <div>
      <h3>Courses</h3>
      <p>Which courses do you want to sign up for?</p>
      {courses.map(course => (
        <CheckboxContainer
          key={course.id}
          label={course.name}
          checked={selectedCourses[course.id]} // Pass the state
          onChange={(checked) => handleCheckboxChange(course.id, checked)} // Pass the handler
        />
      ))}
    </div>
  );
};

export default CourseSignUp;
