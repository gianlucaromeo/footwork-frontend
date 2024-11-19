import { useState, useEffect } from 'react';

import CheckboxContainer from './CheckboxContainer';
import coursesService from '../services/courses';

const CourseSignUp = () => {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    console.log('Fetching courses');
    coursesService.getAll()
      .then(response => {
        console.log('Courses fetched:', response);
        setCourses(response);
      }).catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, [])

  return (
    <div>
      <h3>Courses</h3>
      <p>Which courses do you want to sign up for?</p>
      {courses.map(course =>
        <CheckboxContainer key={course.id} label={course.name} />
      )}
    </div>
  );
};

export default CourseSignUp;
