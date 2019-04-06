const serializeTree = root => {
  if (!root) {
    return [NaN];
  }
  const result = [root.value];
  return result
    .concat(serializeTree(root.left))
    .concat(serializeTree(root.right));
};

const deserializeTree = array => {
  const helper = (array, idx = 0) => {
    if (idx >= array.length) {
      return [null, idx];
    }
    if (isNaN(array[idx])) {
      return [null, idx + 1];
    }
    const root = new Node(array[idx]);
    const [left, size] = helper(array, idx + 1);
    root.left = left;
    const [right, size] = helper(array, size);
    root.right = right;
    return [root, size];
  };
  return helper(array, 0)[0];
};

class Node {
  constructor(val) {
    this.value = val;
  }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.right.left = new Node(4);
root.right.right = new Node(5);

[1, 2, NaN, NaN, 3, 4, NaN, NaN, 5, NaN, NaN]
