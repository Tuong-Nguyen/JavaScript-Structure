import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles, createStyleSheet } from 'material-ui/styles';

import Login from './Login';
import { login } from './loginActions';
import background from './google-now-mountain.png';

const styleSheet = createStyleSheet(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100vh',
    background: 'url(' + background + ') top left / cover no-repeat'
  }
}));

export class LoginPage extends React.Component {
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
      [name]: value
    });
  }

  handleLogin(event) {
    //event.preventDefault();
    this.props.onLogin(this.state.username, this.state.password);
  }

  render() {
    const {
      classes,
      loading = false,
      error
    } = this.props;

    return (
      <div className={classes.root}>
        <Login
          username={this.state.username}
          password={this.state.password}
          error={error}
          loading={loading}
          onInputChange={this.handleInputChange}
          onLogin={this.handleLogin}
        />
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object,
  user: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.object,
  onLogin: PropTypes.func
};

LoginPage.defaultProps = {
  classes: {},
  error: {}
};

const mapStateToProps = state => ({
  user: state.login.user,
  loading: state.login.loading,
  error: state.login.error
});

const mapDispatchToProps = dispatch => ({
  onLogin: (username, password) => dispatch(login(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styleSheet)(LoginPage)
);