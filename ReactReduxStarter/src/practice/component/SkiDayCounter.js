/**
 * Created by nctuong on 7/11/2017.
 */

import React, {Component, PropTypes} from "react";
import '../../stylesheets/index.scss';
import Terrain from 'react-icons/lib/md/terrain';
import SnowFlake from 'react-icons/lib/ti/weather-snow';
import Calendar from 'react-icons/lib/fa/calendar';

export class SkiDayCounter extends Component{

  percentToDecimal(decimal) {
    return `${decimal * 100}%`;
  }

  calcGoalProgress(total, goal) {
    return SkiDayCounter.percentToDecimal(total/goal);
  }

  render(){
    return (<div className="ski-day-count">
      <div className="total-days"><span>{this.props.total} <Calendar/> days</span></div>
      <div className="powder-days"><span>{this.props.powder} <SnowFlake/> days</span></div>
      <div className="backcountry-days"><span>{this.props.backcountry} <Terrain/> day</span></div>
      <div ><span>{this.calcGoalProgress(this.props.total, this.props.goal)}</span></div>
    </div>);
  }
}

SkiDayCounter.defaultProps = {
  total: 50,
  powder: 10,
  backcountry: 10,
  goal: 100
};

SkiDayCounter.propTypes = {
  total: PropTypes.number,
  powder: PropTypes.number,
  backcountry: PropTypes.number,
  goal: PropTypes.number
};

