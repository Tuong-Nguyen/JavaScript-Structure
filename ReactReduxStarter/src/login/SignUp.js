import React from 'react';
import PropTypes from 'prop-types';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import {Button} from 'material-ui';
import AddIcon from 'material-ui-icons/Add';

const styleSheet = createStyleSheet(theme => ({
  fab: {
    position: 'absolute',
    left: 354,
    top: 32,
    width: 127,
    height: 127,
    transition: 'all 0.5s ease',
    backgroundColor: '#ED2553',
    '&:hover': {
      backgroundColor: '#ED2553'
    },
    '&:focus': {
      left: 150,
      top: 172
    }
  },
}));

const propTypes = {
  classes: PropTypes.object
};

const defaultProps = {
  classes: {}
};

const SignUp = (props) => {
  const {classes} = props;

  return (
    <Button className={classes.fab} fab color="primary" aria-label="add">
      <AddIcon className={classes.addIcon}/>
    </Button>
  );
};

SignUp.propTypes = propTypes;
SignUp.defaultProps = defaultProps;

export default withStyles(styleSheet)(SignUp);