import Node from './Node';

describe('Node', () => {
  describe('Creation', () => {
    test('should throw an error when key is null or undefined', () => {
      expect(() => {
        let node = new Node(null, 12);
      }).toThrow();
    });

    test('should have empty left child', () => {
      let node = new Node(1, 1);
      expect(node.left).toBe(null);
    });

    test('should have empty right child', () => {
      let node = new Node(1, 1);
      expect(node.right).toBe(null);
    });

    test('should have node count = 1', () => {
      let node = new Node(1, 1);
      expect(node.count).toBe(1);
    });
  });
});