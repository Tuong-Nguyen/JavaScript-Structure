/**
 * Created by nctuong on 7/11/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {SkiDayList} from "./component/SkiDayList";

ReactDOM.render(<SkiDayList
   days = {[
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
   ]}
/>, document.getElementById('root'));


