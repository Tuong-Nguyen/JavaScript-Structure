/**
 * Created by nttao on 8/1/2017.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import MainPage from './MainPage';

storiesOf("Sphera-UI", module)
  .add('page1',()=>(
    <MainPage/>
  ));
