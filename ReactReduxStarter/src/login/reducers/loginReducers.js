import { REQUEST_LOGIN, RECEIVE_LOGIN } from "../actions/loginActions";

const login = (state = false, action) => {
  switch (action.type) {
    case REQUEST_LOGIN:
      return state;
    case RECEIVE_LOGIN:
      return action.loggedIn;
    default:
      return state;
  }
};

export default login;