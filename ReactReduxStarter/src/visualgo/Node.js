export default class Node {
  constructor(key, value) {
    if (key) {
      this.key = key;
      this.value = value;
      this.left = null;
      this.right = null;
      this.count = 1;
    } else
      throw new Error('Key can not be null or undefined');
  }
}