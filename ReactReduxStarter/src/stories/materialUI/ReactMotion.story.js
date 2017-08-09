/**
 * Created by lnthao on 8/8/2017.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import ListAndButtonWithMotion from './../../components/common/ListAndButtonWithMotion';
import DivWithPresets from './../common/DivWithPresets';

storiesOf("React Motion", module)
  .add('List and Button with motion', () => (
    <ListAndButtonWithMotion />
  ))
  .add('Div with presets', () => (
    <DivWithPresets />
  ));
