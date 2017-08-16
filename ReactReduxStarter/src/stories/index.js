// Jest and enzyme
//
// Higher order component

import React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import { addDecorator } from '@storybook/react';

import theme from '../app/theme';

const ThemeDecorator = (storyFn) => (
  <MuiThemeProvider theme={theme}>
    {storyFn()}
  </MuiThemeProvider>
)

addDecorator(ThemeDecorator);

// import is hoisting!!!
require('../login/LoginPage.story');
require('../soundcloud/SoundCloud.story');