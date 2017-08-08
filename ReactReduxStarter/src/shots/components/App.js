import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, withStyles, createStyleSheet } from 'material-ui/styles';

import theme from '../../common/theme';
import FilterableShotList from '../containers/FilterableShotList';

const styleSheet = createStyleSheet(theme => ({
  app: {
    fontFamily: theme.typography.fontFamily
  }
}));

const App = (props) => {
  const { classes } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.app}>
        <FilterableShotList />
      </div>
    </MuiThemeProvider>
  );
};

App.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styleSheet)(App);