/**
 * Created by nctuong on 7/12/2017.
 */

import React, {Component} from 'react';
import {SkiDayCounter} from "./SkiDayCounter";
import {SkiDayList} from "./SkiDayList";
import {AddDayForm} from "./AddDayForm";
import './../../stylesheets/index.scss';
import {Menu} from "./Menu";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allSkiDays: [
        {
          resort: 'Squaw Valley',
          date: new Date('1/2/2016'),
          powder: true,
          backcountry: false
        },
        {
          resort: 'Kirkwood',
          date: new Date('3/28/2016'),
          powder: false,
          backcountry: false
        },
        {
          resort: 'Mt. Tallac',
          date: new Date('4/2/2016'),
          powder: true,
          backcountry: false
        }
      ]
    };
  }

  countDays(filter) {
    if (filter) {
      return this.state.allSkiDays.filter(day => day[filter] === true).length;
    } else {
      return this.state.allSkiDays.length;
    }
  }

  render() {
    return (
      <div className="app">
        <Menu/>
        {this.props.location.pathname === '/' ?
          <SkiDayCounter
            total={this.countDays()}
            powder={this.countDays('powder')}
            backcountry={this.countDays('backcountry')}
            goal={100}/> :
          (this.props.location.pathname === '/add-day' ?
            <AddDayForm /> :
            <SkiDayList days={this.state.allSkiDays} filter={this.props.params.filter}/>)
        }
      </div>
    );
  }
}
