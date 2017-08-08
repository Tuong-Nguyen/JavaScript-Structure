import { REQUEST_SHOTS, RECEIVE_SHOTS, REQUEST_AUTHOR, RECEIVE_AUTHOR } from '../actions/shotsActions';

const initialState = {
  shots: [],
  authors: []
};

const entities = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SHOTS:
      return state;
    case RECEIVE_SHOTS:
      return {
        ...state,
        shots: action.shots,
        authors: action.authors
      };
    case REQUEST_AUTHOR:
      return state;
    case RECEIVE_AUTHOR:
      const idx = state.authors.map(author => author.id).indexOf(action.author.id);
      return {
        ...state,
        authors: [
          ...state.authors.slice(0, idx),
          action.author,
          ...state.authors.slice(idx + 1, state.authors.length)
        ]
      }
    default:
      return state;
  }
};

export default entities;