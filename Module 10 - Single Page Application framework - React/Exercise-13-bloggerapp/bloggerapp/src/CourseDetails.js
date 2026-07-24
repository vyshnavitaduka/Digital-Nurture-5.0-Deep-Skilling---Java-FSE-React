import React from "react";

function CourseDetails() {
  const course = {
    name: "Java Full Stack Engineering",
    duration: "12 weeks",
    modules: 9,
    level: "Intermediate",
  };

  return (
    <div>
      <h2>{course.name}</h2>
      <p>Duration: {course.duration}</p>
      <p>Modules: {course.modules}</p>
      <p>Level: {course.level}</p>
    </div>
  );
}

export default CourseDetails;
