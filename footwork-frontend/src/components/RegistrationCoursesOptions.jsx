import { useState, useEffect } from 'react'
import CheckboxContainer from './CheckboxContainer'
import coursesService from '../services/courses'

const RegistrationCoursesOptions = ({ onSelectedCoursesChanged }) => {
  const [courses, setCourses] = useState([]);
  const [selectedCoursesIds, setSelectedCoursesIds] = useState([]);

  useEffect(() => {
    console.log('Fetching courses');
    coursesService.getAll()
      .then(response => {
        console.log('Courses fetched:', response);
        setCourses(response.data);
        setSelectedCoursesIds([]);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  const handleCheckboxChange = (courseId, checked) => {
    setSelectedCoursesIds((prevSelectedCoursesIds) => {
      const updatedSelectedCourses = checked
        ? [...prevSelectedCoursesIds, courseId]
        : prevSelectedCoursesIds.filter(course => course !== courseId);
      return updatedSelectedCourses;
    });
  };

  // Use useEffect to notify parent when selectedCoursesIds changes
  useEffect(() => {
    onSelectedCoursesChanged(selectedCoursesIds);
  }, [selectedCoursesIds, onSelectedCoursesChanged]);

  return (
    <div className="courses">
      <div className="titleDescription">
          <div className="copy-large-med">Courses</div>
          <div className="copy-medium-reg">Which courses do you want to sign up for?</div>
      </div>
      {courses.map(course => (
        <CheckboxContainer
          key={course.id}
          label={course.name}
          checked={selectedCoursesIds.includes(course.id)}
          onChange={(checked) => handleCheckboxChange(course.id, checked)}
        />
      ))}
    </div>
  );
};

export default RegistrationCoursesOptions