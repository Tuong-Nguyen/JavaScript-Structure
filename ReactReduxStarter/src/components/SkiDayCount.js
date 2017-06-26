/**
 * Created by lnthao on 6/23/2017.
 */
import React from 'react';
import '../stylesheets/index.scss';

export class SkiDayCount extends React.Component{
  render(){
    return (
      <div className="ski-day-count">
        <div className="total-days">
          <span>{this.props.total}</span>
          <span>days</span>
        </div>
        <div className="powder-days">
          <span>{this.props.powder}</span>
          <span>days</span>
        </div>
        <div className="backcountry-days">
          <span>{this.props.backcountry}</span>
          <span>days</span>
        </div>
        <div><span>{this.props.goal}</span></div>
      </div>
    );
  }
}
