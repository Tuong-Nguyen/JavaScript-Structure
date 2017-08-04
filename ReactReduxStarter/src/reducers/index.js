import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import practices from './practiceReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  practices,
  numberOfAjaxCallsInProgress: ajaxCallsInProgress
});

export default rootReducer;
