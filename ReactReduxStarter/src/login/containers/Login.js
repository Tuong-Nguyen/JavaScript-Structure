import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { Typography, FormControl, InputLabel, Input, Button } from 'material-ui';
import { blue } from 'material-ui/colors';

import twitter from './icon-twitter-bird-2x.png';
import Logo from '../../layout/Logo';
import { login } from '../actions/loginActions';

const styleSheet = createStyleSheet(theme => ({
  login: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.primary[800]
  },

  logo: {
    paddingTop: 52,
    textAlign: 'center'
  },

  signInLabel: {
    fontSize: '2em',
    color: theme.palette.primary[400],
    marginTop: 12
  },

  inputControl: {
    display: 'block',
    marginBottom: 12
  },

  inputLabel: {
    color: 'rgba(255, 255, 255, 0.5)'
  },

  description: {
    color: 'rgba(255, 255, 255, 0.5)',
    width: '45%'
  },

  input: {
    color: '#fff',
    width: 320
  },

  signInBtn: {
    display: 'block',
    marginTop: '12px'
  },

  twitterBtn: {
    backgroundColor: blue[800],
    '&:hover': {
      backgroundColor: blue[800]
    },
    marginBottom: '22px',
    '&::before': {
      content: '',
      position: 'relative',
      top: 0,
      left: 20,
      background: 'url(' + twitter + ') no-repeat 15px 50%'
    }
  },

  left: {
    boxSizing: 'border-box',
    paddingLeft: '24%',
    paddingTop: '8px',
    width: '50%',
    display: 'inline-block',
    borderRight: '1px solid black'
  },

  right: {
    boxSizing: 'border-box',
    width: '50%',
    display: 'inline-block',
    padding: 32,
    textAlign: 'left'
  },

  content: {
    paddingTop: '25px'
  },

  bottom: {
    textAlign: 'center'
  },

  signUpLink: {
    textDecoration: 'none'
  },

  signUpText: {
    color: blue[800]
  }
}));

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      // JS: Computed property name
      [name]: value
    });
  }

  handleLogin() {
    const username = this.state.username;
    const password = this.state.password;
    this.props.onLogin(username, password);
  }

  render() {
    const { classes, loggedIn } = this.props;

    return (
      <div className={classes.login}>
        <div className={classes.logo}>
          <Logo size="large" width="200px" height="50px"/>
          <Typography className={classes.signInLabel}>Sign in</Typography>
        </div>
        <div className={classes.content}>
          <div className={classes.left}>
            <FormControl className={classes.inputControl}>
              <InputLabel className={classes.inputLabel} htmlFor="username">
                Username
              </InputLabel>
              <Input
                className={classes.input}
                value={this.state.username}
                id="username"
                name="username"
                type="text"
                onChange={this.handleInputChange}
              />
            </FormControl>
            <FormControl className={classes.inputControl}>
              <InputLabel className={classes.inputLabel} htmlFor="password">
                Password
              </InputLabel>
              <Input
                className={classes.input}
                value={this.state.password}
                id="password"
                name="password"
                type="password"
                onChange={this.handleInputChange}
              />
            </FormControl>
            <Button className={classes.signInBtn} onClick={this.handleLogin}>
              Sign In
            </Button>
          </div>
          <div className={classes.right}>
            <Button className={classes.twitterBtn}>Sign in with Twitter</Button>
            <Typography className={classes.description}>
              One-click sign in to Dribbble if your account is connected to Twitter. We’ll walk you through connecting it if it isn’t.
            </Typography>
          </div>
          <div className={classes.bottom}>
            <Typography className={classes.inputLabel}>Not a member?</Typography>
            <a className={classes.signUpLink} href="#">
              <Typography className={classes.signUpText}>Sign up now</Typography>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object,
  onLogin: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  loggedIn: state.loggedIn
});

const mapDispatchToProps = dispatch => ({
  onLogin: (username, password) => dispatch(login(username, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styleSheet)(Login));