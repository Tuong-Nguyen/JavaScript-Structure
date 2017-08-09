/**
 * Created by lnthao on 7/28/2017.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Donut from './../common/Donut';

storiesOf('Donut', module)
  .add('Default', () => (
    <Donut />
  ))
  .add('Multiple donuts', () => (
    <div>
      <Donut percent={25} />
      <Donut percent={50}/>
      <Donut percent={75}/>
    </div>
  ));
