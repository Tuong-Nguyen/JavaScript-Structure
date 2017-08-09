import { combineReducers } from 'redux';

import entities from '../shots/reducers/entityReducers';
import login from '../login/reducers/loginReducers';

const dribbbleApp = combineReducers({
  entities,
  login
});

export default dribbbleApp;