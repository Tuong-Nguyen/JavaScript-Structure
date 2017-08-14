/**
 * Created by lnthao on 7/27/2017.
 */
//import React, {PropTypes} from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddAlarm from 'material-ui-icons/AddAlarm';

const styleSheet = createStyleSheet('OverridesClasses', {
  raised: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)'
  },
  label: {
    textTransform: 'capitalize'
  }
});

export const CandyButton = (props) => {
  return (
    <Button
      classes={{
        root: props.classes.raised, // className, e.g. `OverridesClasses-root-X`
        label: props.classes.label // className, e.g. `OverridesClasses-label-X`
      }}
    >
      <AddAlarm/>
    </Button>
  );
}

CandyButton.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styleSheet)(CandyButton);
