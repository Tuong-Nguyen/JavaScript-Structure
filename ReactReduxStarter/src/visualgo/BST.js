import Node from './Node';

export default class BST {
  constructor() {
    this.root = null;
  }

  find(key) {
    return find(this.root, key);
  }

  static find(node, key) {
    if (key) {
      if (node) {
        if (key < node.key) {
          find(node.left, key);
        } else if (key > node.key) {
          find(node.right, key);
        } else {
          return node;
        }
      } else {
        return null;
      }
    } else {
      throw new TypeError('key can not be null or undefined');
    }
  }

  put(key, value) {
    put(this.root, key, value);
  }

  static put(node, key, value) {
    // Update new value if key already exists
    if (key === node.key) {
      node.value = value;
      return node;
    }
    else {
      const newNode = new Node(key, value);
      if (key < node.key) {
        if (!node.left) {
          node.left = newNode;
        } else {
          put(node.left, key, value);
        }
      } else {
        if (!node.right) {
          node.right = newNode;
        } else {
          put(node.right, key, value);
        }
      }
      return newNode;
    }
  }

  remove(key) {

  }

  size() {
    if (this.root) {
      return this.root.count;
    } else {
      return 0;
    }
  }

  isEmpty() {
    return !this.root;
  }
}