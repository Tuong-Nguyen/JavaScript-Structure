/**
 * Created by nttao on 7/12/2017.
 */
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
export default function configStore(initialState) {
  createStore(rootReducer, initialState, applyMiddleware(reduxImmutableStateInvariant()));
}
