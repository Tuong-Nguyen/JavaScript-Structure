import { RECEIVE_SHOTS } from '../actions/actionTypes';

const shots = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SHOTS:
      return action.shots;
    default:
      return state;
  }
};

export default shots;