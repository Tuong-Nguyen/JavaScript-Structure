/**
 * Created by lnthao on 6/23/2017.
 */
import React from 'react';
import '../stylesheets/index.scss';

export class SkiDayCount extends React.Component{
  render(){
    return (
      <div className="ski-day-count">
        <div>
          <span>5 days</span>
        </div>
        <div>
          <span>2 days</span>
        </div>
        <div>
          <span>1 hiking day</span>
        </div>
      </div>
    );
  }
}
