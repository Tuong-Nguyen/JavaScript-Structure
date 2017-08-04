import React, { PropTypes } from 'react';
import PracticeListRow from './PracticesListRow';

//In this script, Display UI => using stateless component
const PracticeList = ({ practices }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
      {practices.map(practice => <PracticeListRow key={practice.id} practice={practice}/>)}
      </tbody>
    </table>
  );
};

//Prototype of component
PracticeList.propTypes = {
  practices: PropTypes.array.isRequired
};

export default PracticeList;
