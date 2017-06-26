/**
 * Created by lnthao on 6/26/2017.
 */
import Terrain from 'react-icons/lib/md/terrain';
import SnowFlake from 'react-icons/lib/ti/weather-snow';
import Calendar from 'react-icons/lib/fa/calendar';
import {PropTypes} from 'react';

export const SkiDayRow = ({resort, date, powder, backcountry}) => (
    <tr>
      <td>{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</td>
      <td>{resort}</td>
      <td>{powder ? <SnowFlake/> : null}</td>
      <td>{backcountry ? <Terrain/> : null}</td>
    </tr>
);
SkiDayRow.propTypes = {
  resort: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  powder: PropTypes.bool,
  backcountry: PropTypes.bool
}
