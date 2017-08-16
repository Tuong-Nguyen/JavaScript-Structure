import React from 'react';
import PropTypes from 'prop-types';
import { Router as BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider, withStyles, createStyleSheet } from 'material-ui/styles';

import theme from './theme';
import LoginPage from '../login/LoginPage';
import VisuAlgo from '../visualgo';
import SoundCloud from '../soundcloud';
import Animation from '../animation';

const styleSheet = createStyleSheet(theme => ({
  app: {
    width: '100%',
    height: '100vh'
  }
}));

const App = (props) => {
  const { classes } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.app}>
        <SoundCloud />
      </div>
    </MuiThemeProvider>
  );
};

App.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styleSheet)(App);