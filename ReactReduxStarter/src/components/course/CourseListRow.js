/**
 * Created by lnthao on 7/5/2017.
 */
import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CourseListRow = ({course}) => {
  const sayHello = (e) => {
      alert("Hello, you have clicked into " + e.target.tagName );
  };

  return (
      <tr>
        <td><a href={course.watchHref} target="_blank">Watch</a> </td>
        <td><Link to={'/course/'+ course.id}>{course.title}</Link></td>
        <td>{course.authorId}</td>
        <td>{course.category}</td>
        <td>{course.length}</td>
        <td><button className="btn btn-info" onClick={sayHello}>Delete</button></td>
      </tr>

  );
};

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired
};

export default CourseListRow;
