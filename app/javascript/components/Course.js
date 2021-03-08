import React from "react";

const Course = ({ course }) => {
    const { name, id } = course;
    return (
      <>
        <div>
          <h1>{name}</h1>
          <hr />
          <h6>Courses</h6>
          <a href={`/courses/${id}/enrollments`}>Enrollments</a>
          <a href={`/courses/${id}`} data-method="delete">
            Course delete
          </a>
        </div>
      </>
    );
}

export default Course;