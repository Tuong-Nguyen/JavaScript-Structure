import { LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR } from "./loginActions";

const initialState = {
  user: {},
  loading: false,
  error: {}
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loading: true
      };
    case LOGIN_SUCCESS:
      console.log('succsss');
      return {
        user: action.user,
        loading: false,
        error: {}
      };
    case LOGIN_ERROR:
      return {
        user: {},
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default login;