import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { CircularProgress } from 'material-ui';

export const styleSheet = createStyleSheet(theme => ({
  root: {
    display: 'flex',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },

  circularProgress: {
    margin: 'auto'
  }
}));

const Loading = (props) => {
  const {
    classes,
    loading
  } = props;

  const styles = { visibility: loading === true ? 'visible' : 'hidden' };

  return (
    <div className={classes.root} style={styles}>
      <CircularProgress color="accent" className={classes.circularProgress}/>
    </div>
  );
};

Loading.propTypes = {
  classes: PropTypes.object,
  loading: PropTypes.bool
};

Loading.defaultProps = {
  loading: false
};

export default withStyles(styleSheet)(Loading);