import React from "react";

const Course = ({ course }) => {
    const { name, id } = course;
    return (
      <>
        <div>
          <h1>{name}</h1>
          <hr />
          <a href={`/courses/${id}/enrollments`}>Enrollments</a>
          <br />
          <a href={`/courses/${id}`} data-method="delete">
            Course delete
          </a>
        </div>
      </>
    );
}

export default Course;