import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <a href={course.link}>Acesse o curso</a>
    </div>
  );
};

export default CourseCard;
