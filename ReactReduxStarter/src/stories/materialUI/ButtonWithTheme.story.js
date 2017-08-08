/**
 * Created by nctuong on 7/26/2017.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from 'material-ui/Button';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
import OverrideClasses from './../common/OverrideClasses';

const theme = createMuiTheme({
  palette: createPalette({
    primary: purple,
    error: red
  })
});

const overrideTheme = createMuiTheme({
  overrides: {
    MuiButton: {
      // Name of the styleSheet
      root: {
        // Name of the rule
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)'
      }
    }
  }
});

storiesOf('materialUI.Button', module)
  .add('Flat button with default theme', () => (
    <Button color="primary">
      {'Primary'}
    </Button>
  ))
  .add('Flat button with new theme', () => (
    <MuiThemeProvider theme={theme}>
      <Button color="primary">
        {'Primary'}
      </Button>
    </MuiThemeProvider>
  ))
  .add('Button with override theme', () => (
    <MuiThemeProvider theme={overrideTheme}>
      <Button>
        {'Overrides'}
      </Button>
    </MuiThemeProvider>
  ))
  .add('Button with override classes vs Button', () => (
    <div>
      <OverrideClasses> Override Classes </OverrideClasses>
      <Button raised>Button</Button>
    </div>
  ));
