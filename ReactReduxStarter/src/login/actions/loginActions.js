export const REQUEST_LOGIN = 'REQUEST_LOGIN';

function requestLogin() {
  return {
    type: REQUEST_LOGIN
  };
}

export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';

function receiveLogin(loggedIn) {
  return {
    type: RECEIVE_LOGIN,
    loggedIn
  };
}

export function login(username, password) {
  return function(dispatch) {
    dispatch(requestLogin());

    setTimeout(() => dispatch(receiveLogin(true)), 2000);
  };
}