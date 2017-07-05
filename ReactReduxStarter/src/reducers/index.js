/**
 * Created by lnthao on 7/4/2017.
 */
import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
  courses, authors
});

export default rootReducer;
