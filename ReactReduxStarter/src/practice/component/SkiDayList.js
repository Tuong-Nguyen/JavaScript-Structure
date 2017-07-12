/**
 * Created by nctuong on 7/11/2017.
 */
import React, {PropTypes} from 'react';
import {SkiDayRow} from "./SkiDayRow";


export const SkiDayList = ({days}) => {
  return (
    <table>
      <thead>
      <tr>
        <th>Date</th>
        <th>Resort</th>
        <th>Powder</th>
        <th>Backcountry</th>
      </tr>
      </thead>
      <tbody>
      {days.map((day, i) => <SkiDayRow key={i}
                                       resort={day.resort}
                                       date={day.date}
                                       powder={day.powder}
                                       backcountry={day.backcountry}
      />)}
      </tbody>
    </table>
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
  }
};

