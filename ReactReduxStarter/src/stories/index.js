import React from 'react';
import { MuiThemeProvider, withStyles, createStyleSheet } from 'material-ui/styles';
import { addDecorator } from '@storybook/react';

import theme from '../common/theme';

const styleSheet = createStyleSheet(theme => ({
  decorator: {
    fontFamily: theme.typography.fontFamily
  }
}));

const ThemeDecorator = (storyFn) => (
  <MuiThemeProvider theme={theme}>
    <div style={{ fontFamily: theme.typography.fontFamily }}>
      {storyFn()}
    </div>
  </MuiThemeProvider>
)

addDecorator(ThemeDecorator);

// import is hoisting!!!
require('../layout/Header/Header.story');
