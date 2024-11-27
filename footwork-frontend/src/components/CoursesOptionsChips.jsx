import { useState, useEffect } from 'react'
import Chip from './Chip'
import coursesService from '../services/courses'

const CoursesOptionsChips = ({ 
  onSelectedCourseChanged, 
  title,
}) => {
  const [courses, setCourses] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState(null);

  useEffect(() => {
    coursesService.getAll()
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  const handleChipChange = (courseId, checked) => {
    setSelectedCourseId(checked ? courseId : null);
  };

  useEffect(() => {
    onSelectedCourseChanged(selectedCourseId);
  }, [selectedCourseId, onSelectedCourseChanged]);
  

  return (
    <div className="selectedDanceContainer">
      <div className="titleDescription">
          {title && <div className="copy-medium-reg">{title}</div> }
      </div>
      <div className="chipsContainer">
        {courses.map(course => (
          <Chip
            key={course.id}
            text={course.name}
            isSelected={selectedCourseId === course.id}
            onClick={(isSelected) => handleChipChange(course.id, isSelected)}
          />
        ))}
      </div>
    </div>
  );
};

export default CoursesOptionsChips