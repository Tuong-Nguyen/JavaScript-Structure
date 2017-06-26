/**
 * Created by lnthao on 6/23/2017.
 */
import React from 'react';
import { render } from 'react-dom';
import {SkiDayList} from './components/SkiDayList';
import {SkiDayCount} from './components/SkiDayCount';

window.React = React;

// render(<SkiDayCount />
//   , document.getElementById('root'));

render(<SkiDayList days={
    [
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
  } />
  , document.getElementById('root'));
