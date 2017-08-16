import { combineReducers } from 'redux';

import login from '../login/loginReducers';

const root = combineReducers({
  login
});

export default root;