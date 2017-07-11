/**
 * Created by nttao on 7/5/2017.
 */
import React, {PropTypes} from 'react';
import './../../resources/css/ui.scss';
import Terrain from 'react-icons/lib/md/terrain';
import SnowFlake from 'react-icons/lib/ti/weather-snow';
import Calender from 'react-icons/lib/fa/calendar';
export class SkiDayCount extends React.Component {
  getPercent(decimal){
    return ((decimal*100) + "%");
  }
  calPercent(total, goal){
    return this.getPercent(total/goal)
  }
  render(){
    return (
      <div className="ski-day-count">
        <div className="total-days">
          <span>{this.props.total} days</span>
          <Calender/>
        </div>
        <div className="powder-days">
          <span>{this.props.powder} days</span>
          <Terrain/>
        </div>
        <div className="backcountry-days">
          <span>{this.props.backcountry} hiking days</span>
          <SnowFlake/>
        </div>
        <div>
          <span>{this.calPercent(this.props.total, this.props.goal)}</span>
        </div>
      </div>
    );
  }
}
SkiDayCount.defaultProps = {}
SkiDayCount.propTypes = {
  total: PropTypes.number
}
