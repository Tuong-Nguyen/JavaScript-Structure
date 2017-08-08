import React from 'react';
import { storiesOf } from '@storybook/react';
import { AppBar, Toolbar } from 'material-ui';

import MainNav from './MainNav';

storiesOf('Header.MainNav', module)
  .add('Main Navigation', () => (
    <MainNav />
  ));