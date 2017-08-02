import { SkiDayRow} from "./SkiDayRow";
import { Link } from 'react-router';
import "../stylesheets/index.scss";

export const SkiDayList = ({days, filter}) => {
  const filterdDays = (!filter ||
    !filter.match(/powder|backcountry/)) ?
    days:
    days.filter(day => day[filter]);

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
          <th>
            <Link to="list-days">
              All days
            </Link>
          </th>
          <th>
            <Link to="/list-days/powder">
              Powder days
            </Link>
          </th>
          <th>
            <Link to="/list-days/backcountry">
              Backcountry days
            </Link>
          </th>
        </tr>
        </thead>
        <tbody>
        {filterdDays.map((day, i) =>
          <SkiDayRow
            key={i}
            {...day}
          />
        )}
        </tbody>
      </table>
    </div>
  )
}
SkiDayList.propTypes = {
  days: function(props) {
    if(!Array.isArray(props.days)) {
      return new Error("SkiDayList should be an array");
    } else if(!props.days.length) {
      return new Error("SkiDayList must have at least on record")
    } else {
      return null
    }
  }
}

