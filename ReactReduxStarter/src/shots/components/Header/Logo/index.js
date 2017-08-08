import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';

import dribbbleLogo from './logo-small.png';

const styleSheet = createStyleSheet(theme => ({
  logo: {
    position: 'relative',
    cursor: 'pointer'
  },

  overlay: {
    display: 'inline-block',
    position: 'absolute',
    left: 0,
    width: 76,
    height: 19,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    transition: 'background-color 1s ease',
    
    '&:hover': {
      backgroundColor: 'rgba(66, 66, 66, 0.5)'
    }
  }
}));

const Logo = (props) => {
  const { classes } = props;

  return (
    <a href="/" className={classes.logo}>
      <img src={dribbbleLogo} alt="Dribbble" />
      <div className={classes.overlay}></div>
    </a>
  );
};

Logo.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styleSheet)(Logo);