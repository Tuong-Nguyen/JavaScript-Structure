import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';

export const styleSheet = createStyleSheet(theme => ({
  root: {

  }
}));

const propTypes = {
  classes: PropTypes.object
};

const Template = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>

    </div>
  );
};

Template.propTypes = propTypes;

export default withStyles(styleSheet)(Template);