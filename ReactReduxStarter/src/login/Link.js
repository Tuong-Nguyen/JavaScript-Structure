import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { Typography } from 'material-ui';

const styleSheet = createStyleSheet(theme => ({
  root: {
    margin: '0 auto',
    textDecoration: 'none'
  },

  text: {
    fontSize: '1.1em',
    color: theme.palette.text.secondary
  }
}));

const Link = (props) => {
  const {
    children,
    classes
  } = props;

  return (
    <a className={classes.root} href="#">
      <Typography className={classes.text}>{children}</Typography>
    </a>
  );
};

Link.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.string
};

export default withStyles(styleSheet)(Link);