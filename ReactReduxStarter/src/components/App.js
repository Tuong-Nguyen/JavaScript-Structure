/**
 * Created by lnthao on 6/26/2017.
 */
import {createClass} from 'react';
import {SkiDayList} from './SkiDayList';
import {SkiDayCount} from './SkiDayCount';

export const App = createClass({
  getInitialState() {
      return {
          allSkiDays: [
            {
              resort: "SquaW Valley",
              date: new Date('6/1/2017'),
              powder: true,
              backcountry: false
            },
            {
              resort: "Kirkwood",
              date: new Date('6/15/2017'),
              powder: false,
              backcountry: false
            },
            {
              resort: "Mt. Tallac",
              date: new Date('6/26/2017'),
              powder: false,
              backcountry: true
            }
          ]
    };
  },
  countDays(filter) {
    const {allSkiDays} = this.state; // <=> const allSkiDays = this.state.allSkiDays
    return allSkiDays.filter((day) => (filter) ? day[filter] : day).length;
  },
  render() {
    return (
      <div className="app">
        <SkiDayList days={this.state.allSkiDays}/>
        <SkiDayCount total={this.countDays()} powder={this.countDays("powder")}
                     backcountry={this.countDays("backcountry")}/>
      </div>
    );
  }
});
