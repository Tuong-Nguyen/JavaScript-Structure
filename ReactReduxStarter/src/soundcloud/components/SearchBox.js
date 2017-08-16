import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { FormControl, InputLabel, Input } from 'material-ui';

export const styleSheet = createStyleSheet(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    '&::before': {
      content: '"\\f002"',
      position: 'absolute',
      display: 'inline-block',
      marginLeft: 8,
      fontFamily: 'FontAwesome'
    }
  },

  input: {
    border: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: 'rgba(255, 255, 255, 1)',
    outline: 'none',
    width: 256,
    height: 28,
    paddingLeft: 32,
    borderRadius: 4,
    '&::placeholder': {
      color: 'rgba(255, 255, 255, 0.6)',
    }
  }
}));

const propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

const SearchBox = (props) => {
  const {
    classes,
    className: classNameProp,
    value,
    onChange,
    ...other
  } = props;

  const className = classNames(
    classes.root,
    classNameProp
  );

  return (
    <div className={className} {...other}>
      <input
        className={classes.input}
        placeholder="Search"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

SearchBox.propTypes = propTypes;

export default withStyles(styleSheet)(SearchBox);