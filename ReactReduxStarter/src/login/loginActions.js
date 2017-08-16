import { signIn } from './services/authenticate';

export const LOGIN_START = 'LOGIN_START';

function loginStart() {
  return {
    type: LOGIN_START
  };
}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user
  };
}

export const LOGIN_ERROR = 'LOGIN_ERROR';

function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error
  };
}

export function login(username, password) {
  return function(dispatch) {
    dispatch(loginStart());

    signIn(username, password)
      .then(user => dispatch(loginSuccess(user)))
      .catch(error => dispatch(loginError(error)));
  };
}

