import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { Typography, Button } from 'material-ui';

import UserInputField from './UserInputField';
import SignUp from './SignUp';
import Loading from './Loading';
import Link from './Link';

export const styleSheet = createStyleSheet(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: 420,
    height: 500,
    margin: 'auto',
    backgroundColor: '#fff',
    borderRadius: 8
  },

  shadow: {
    width: '100%',
    height: 30,
    position: 'absolute',
    top: '-10px',
    left: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 8,
    transform: 'scale(0.95)'
  },

  title: {
    margin: '72px 0 24px 0',
    color: '#ED2553',
    fontSize: '2em',
    fontWeight: 'bold',
    paddingLeft: 42,
    lineHeight: 1,
    textTransform: 'uppercase',
    borderLeft: '6px solid ' + '#ED2553'
  },

  addIcon: {
    width: 52,
    height: 52
  },

  loginButton: {
    height: 62,
    margin: '12px 50px 32px 50px',
    backgroundColor: '#fff',
    border: '3px solid rgba(0, 0, 0, .075)',
    color: 'rgba(0, 0, 0, .2)',
    fontWeight: 'bold',
    fontSize: '1.4em',
    '&:hover': {
      backgroundColor: '#fff',
      border: '3px solid #ED2553',
      color: '#ED2553'
    }
  }
}));

const Login = (props) => {
  const {
    classes,
    username,
    password,
    error,
    loading,
    onInputChange,
    onLogin
  } = props;

  return (
    <div className={classes.root}>
      <div className={classes.shadow}/>
      <Typography className={classes.title}>Login</Typography>
      <UserInputField
        id="username"
        value={username}
        name="username"
        label="Username"
        error={error.username}
        onChange={onInputChange}
      />
      <UserInputField
        id="password"
        type="password"
        value={password}
        name="password"
        label="Password"
        error={error.password}
        onChange={onInputChange}
      />
      <Button className={classes.loginButton} onClick={onLogin}>Go</Button>
      <Link>Forgot your password?</Link>
      <Loading loading={loading}/>
      <SignUp/>
    </div>
  );
};

Login.propTypes = {
  classes: PropTypes.object,
  username: PropTypes.string,
  password: PropTypes.string,
  error: PropTypes.object,
  loading: PropTypes.bool,
  onInputChange: PropTypes.func,
  onLogin: PropTypes.func
};

Login.defaultProps = {
  error: {}
};

export default withStyles(styleSheet)(Login);