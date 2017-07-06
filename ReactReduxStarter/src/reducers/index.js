/**
 * Created by nkim on 6/30/2017.
 */
import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
  courses,
  authors
});

export default rootReducer;
