import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';

import smallLogo from './logo-small.png';
import largeLogo from './logo-hd.png';

const styleSheet = createStyleSheet(theme => ({
  logo: {
    position: 'relative',
    cursor: 'pointer',
    display: 'inline-block'
  },

  overlay: {
    display: 'inline-block',
    position: 'absolute',
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    transition: 'background-color 1s ease',
    
    '&:hover': {
      backgroundColor: 'rgba(66, 66, 66, 0.5)'
    }
  }
}));

const Logo = (props) => {
  const { classes, size = 'small', width, height } = props;

  let logo;
  if (size === 'small') logo = smallLogo;
  else logo = largeLogo;

  return (
    <a href="/" className={classes.logo}>
      <img src={logo} alt="Dribbble" width={width} height={height} />
      <div className={classes.overlay}/>
    </a>
  );
};

Logo.propTypes = {
  classes: PropTypes.object,
  size: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

export default withStyles(styleSheet)(Logo);