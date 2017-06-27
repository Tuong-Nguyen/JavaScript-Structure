/**
 * Created by lnthao on 6/26/2017.
 */
import {createClass} from 'react';

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
  render() {
    return (
      <div className="app">
        {this.state.allSkiDays[0].resort}
      </div>
    );
  }
});
