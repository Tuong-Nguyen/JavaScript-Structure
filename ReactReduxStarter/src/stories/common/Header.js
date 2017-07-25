/**
 * Created by nkim on 7/25/2017.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from '../../components/common/Header';

storiesOf('Header', module)
  .add('loading', () => (
    <Header loading={true} ></Header>
  ))
  .add('not loading', () => (
    <Header loading={false} ></Header>
  ));
