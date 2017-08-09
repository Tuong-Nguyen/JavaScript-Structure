import React from 'react';
import { storiesOf } from '@storybook/react';
import HomePage from '../../components/home/HomePage';

storiesOf('Home page', module)
  .add('Test home page UI', () => (
      <HomePage />
  ));
