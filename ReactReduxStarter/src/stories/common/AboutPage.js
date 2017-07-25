/**
 * Created by nkim on 7/25/2017.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import AboutPage from '../../components/about/AboutPage';

storiesOf('AboutPage', module)
  .add('default view', () => (
    <AboutPage></AboutPage>
  ));

