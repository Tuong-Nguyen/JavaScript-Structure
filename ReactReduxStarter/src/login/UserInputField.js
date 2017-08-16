import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import {FormControl, InputLabel, Input, FormHelperText} from 'material-ui';

export const styleSheet = createStyleSheet(theme => ({
  root: {
    margin: '0 50px 16px 50px',
  },

  input: {
    fontSize: '1.4em'
  },

  inputLabel: {
    fontSize: '1.4em'
  }
}));

const UserInputField = (props) => {
  const {
    classes,
    className: classNameProp,
    value,
    id,
    name,
    label,
    error,
    type,
    onChange,
    ...other
  } = props;

  const className = classNames(
    classes.root,
    classNameProp
  );

  return (
    <FormControl className={className} {...other}>
      <InputLabel className={classes.inputLabel} htmlFor={id}>
        {label}
      </InputLabel>
      <Input
        className={classes.input}
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
      <FormHelperText style={{visibility: error === '' ? 'hidden' : 'visible'}}>
        {error}
      </FormHelperText>
    </FormControl>
  );
};

UserInputField.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func
};

UserInputField.defaultProps = {
  classes: {},
  value: '',
  id: '',
  name: '',
  label: '',
  error: '',
  type: 'text',
  onChange() {
  }
};

export default withStyles(styleSheet)(UserInputField);