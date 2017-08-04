import { getShots } from '../api';

export const REQUEST_SHOTS = 'REQUEST_SHOTS';
export const RECEIVE_SHOTS = 'RECEIVE_SHOTS';

function requestShots() {
  return {
    type: REQUEST_SHOTS
  };
}

function receiveShots(shots, authors) {
  return {
    type: RECEIVE_SHOTS,
    shots,
    authors
  };
}

export function loadShots() {
  return function(dispatch) {
    dispatch(requestShots());
    getShots()
      .then(response => {
        const data = response.data;
        const shots = data.map(item => {
          return {
            id: item.id,
            url: item.html_url,
            image: item.images.normal,
            viewsCount: item.views_count,
            commentsCount: item.comments_count,
            likesCount: item.likes_count,
            authorId: item.user.id
          };
        });

        const authors = data.map(item => {
          return {
            id: item.user.id,
            name: item.user.name,
            avatar: item.user.avatar_url
          };
        });
        dispatch(receiveShots(shots, authors));
      })
      .catch(error => {

      });
  };
}

export function search(query) {
  return function(dispatch) {
    requestShots();


  };
}

export const REQUEST_AUTHOR = 'REQUEST_AUTHORS';
export const RECEIVE_AUTHOR = 'RECEIVE_AUTHORS';

function requestAuthor() {
  return {
    type: REQUEST_AUTHOR
  };
}

function receiveAuthor(author) {
  return {
    author
  };
}

export function getAuthor(authorId) {
  return function(dispatch) {
    dispatch(requestAuthor);

    getAuthor(authorId)
      .then(author => dispatch(receiveAuthor(author)))
      .catch(() => {});
  }
}