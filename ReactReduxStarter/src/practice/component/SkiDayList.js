/**
 * Created by nctuong on 7/11/2017.
 */
import React, {PropTypes} from 'react';
import {SkiDayRow} from "./SkiDayRow";
import {Link} from 'react-router';


export const SkiDayList = ({days, filter}) => {
  let filteredDays = days;
  if (filter.match(/powder|backcountry/)) {
    filteredDays = days.filter((day) => day[filter] === true);
  }

  return (
    <div className="ski-day-list">
      <table>
        <thead>
        <tr>
          <th>Date</th>
          <th>Resort</th>
          <th>Powder</th>
          <th>Backcountry</th>
        </tr>
        <tr>
          <td colSpan={4}>
            <Link to="/list-days">All Days</Link>
            <Link to="/list-days/powder">Powder Days</Link>
            <Link to="/list-days/backcountry">Country Days</Link>
          </td>
        </tr>
        </thead>
        <tbody>
        {filteredDays.map((day, i) => <SkiDayRow key={i}
                                         resort={day.resort}
                                         date={day.date}
                                         powder={day.powder}
                                         backcountry={day.backcountry}
        />)}
        </tbody>
      </table>
    </div>
  );
};

SkiDayList.propTypes = {
  days: function (props) {
    if (!Array.isArray(props.days)) {
      return new Error('SkiDayList should be an array');
    } else if (props.days.length == 0) {
      return new Error('SkiDayList should have at least on record');
    } else {
      return null;
    }
  },
  filter: PropTypes.string
};

