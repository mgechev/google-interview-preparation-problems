const serialize = root => {
  if (!root) {
    return [NaN];
  }
  return [root.value]
    .concat(serialize(root.left))
    .concat(serialize(root.right));
};

const deserialize = arr => {
  const helper = (arr, idx) => {
    if (idx >= arr.length) {
      return [null, idx];
    }
    if (isNaN(arr[idx])) {
      return [null, idx + 1];
    }
    const root = new Node(arr[idx++]);
    const [left, idxL] = helper(arr, idx);
    const [right, idxR] = helper(arr, idxL);
    root.left = left;
    root.right = right;
    return [root, idxR];
  };
  return helper(arr, 0);
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
