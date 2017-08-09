import React from 'react';
import { storiesOf } from '@storybook/react';
import AboutPage from '../../components/about/AboutPage';

storiesOf('materialUI.Button', module)
  .add('Test UI of about page', () => (
    <AboutPage />
  ));
