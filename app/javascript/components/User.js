import React from "react";

const User = ({ user, full_name, courses }) => {
    const { id } = user;
    return (
      <>
        <div className="user-card">
          <h1>{full_name}</h1>
          <hr />
          <h6>Courses</h6>
          <ul>
            { courses.map((course) => (
              <li>
                <a href={`/courses/${course.id}`}>{course.name}</a>
              </li>
            ))}
          </ul>
          <a href={`/users/${id}`} data-method="delete">
            User delete
          </a>
        </div>
      </>
    );
}

export default User;