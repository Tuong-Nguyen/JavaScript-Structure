/**
 * Created by nkim on 7/25/2017.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import HomePage from '../../components/home/HomePage';

storiesOf('HomePage', module)
  .add('default view', () => (
    <HomePage/>
  ));
