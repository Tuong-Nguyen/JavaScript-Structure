import axios from 'axios';

const url = 'https://boiling-beach-50645.herokuapp.com';

export function getFoods() {
  return new Promise((resolve, reject) => {
    axios.get(getRequestUrl('foods'))
      .then(response => {
        console.log(response)
        resolve();
      })
      .catch(error => {
        console.log(error);
        reject();
      });
  });
}

function getRequestUrl(path) {
  return url + '/' + path;
}