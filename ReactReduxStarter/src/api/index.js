import axios from 'axios';

const BASE_URL = 'https://api.dribbble.com/v1/';
const ACCESS_TOKEN = 'd4499499dc24c13c70df224a546ab8d2205c649e4bb95a49f55f195b08b5ff4c';

export function getShots() {
  return axios.get(getUrl('shots'));
}

export function getAuthor(authorId) {
  return axios.get(getUrl('users'))
    .then(response => {
      author = {
        id: response.data.id
      };
      return Promise.resolve(author);
    })
    .catch(() => {});
}

function getUrl(path) {
  return BASE_URL + path + '?access_token=' + ACCESS_TOKEN;
}