import { combineReducers } from 'redux';

import entities from './entityReducers';

const dribbbleApp = combineReducers({
  entities
});

export default dribbbleApp;