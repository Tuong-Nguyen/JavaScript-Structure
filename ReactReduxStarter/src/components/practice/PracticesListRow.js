import React, { PropTypes } from 'react'
import { Link } from 'react-router';

const PracticeListRow = ({ practice }) => {
  return (
    <tr>
      <td><a href={practice.watchHref} target="_blank">Watch</a></td>
      <td><Link to={'/practice/' + practice.id}>{practice.name}</Link></td>
      <td>{practice.description}</td>
      <td><button className="btn btn-infor" data-toggle="confirmation">Delete</button></td>
    </tr>
  )
}

//Prototypes of this component
PracticeListRow.propTypes = {
  practice: PropTypes.object.isRequired
}

export default PracticeListRow;
