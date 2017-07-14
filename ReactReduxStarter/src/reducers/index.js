/**
 * Created by nttao on 7/12/2017.
 */
import {combineReducers} from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  userReducer: userReducer
});
export  default rootReducer;
