import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, withStyles, createStyleSheet } from 'material-ui/styles';

import theme from '../common/theme';
import LoginPage from '../login/containers/Login';
import FilterableShotList from '../shots/containers/FilterableShotList';

const styleSheet = createStyleSheet(theme => ({
  app: {
    width: '100%',
    height: '100%'
  }
}));

const App = (props) => {
  const { classes } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.app}>
        <LoginPage />
      </div>
    </MuiThemeProvider>
  );
};

App.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styleSheet)(App);