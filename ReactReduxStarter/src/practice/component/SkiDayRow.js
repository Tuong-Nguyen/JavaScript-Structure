/**
 * Created by nctuong on 7/11/2017.
 */

import React, {PropTypes} from 'react';
import Terrain from 'react-icons/lib/md/terrain';
import SnowFlake from 'react-icons/lib/ti/weather-snow';


export const SkiDayRow = ({resort, date, powder, backcountry}) => {
  return (
    <tr>
    <td>{date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}</td>
    <td>{resort}</td>
    <td>{(powder) ? <SnowFlake/> : null}</td>
    <td>{(backcountry ? <Terrain/> : null)}</td>
  </tr>
  );
};

SkiDayRow.propTypes = {
  resort: PropTypes.string.isRequired,
  date: PropTypes.objectOf(Date),
  powder: PropTypes.bool.isRequired,
  backcountry: PropTypes.bool.isRequired
};
