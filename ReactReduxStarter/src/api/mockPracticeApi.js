import deplay from './delay';

const practices = [
  {
    id: "1",
    name: "A",
    description: "aaaaa"
  },
  {
    id: "2",
    name: "B",
    description: "bbbbb"
  },
  {
    id: "3",
    name: "C",
    description: "ccccc"
  },
  {
    id: "4",
    name: "D",
    description: "dddd"
  }
];

class PracticeApi {

  static getAllPractices() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], practices));
      }, deplay);
    });
  }
}

export default PracticeApi;
