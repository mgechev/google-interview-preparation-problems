// https://www.geeksforgeeks.org/serialize-deserialize-binary-tree/

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

const bst = new Node(
  6,
  new Node(
    3,
    new Node(
      2
    ),
    new Node(
      5,
      new Node(
        7
      ),
      new Node(
        4
      )
    )
  ),
  new Node(
    5,
    new Node(
      4
    )
  )
);

const serialize = (node, c = 0, res = []) => {
  if (!node) return;
  res[c] = node.data;
  serialize(node.left, 2 * c + 1, res);
  serialize(node.right, 2 * c + 2, res);
  return res;
};

const deserialize = a => {
  const helper = (node, c, a) => {
    if (!node) return;
    node.data = a[c];
    if (a[2 * c + 1] !== undefined) {
      node.left = new Node();
      helper(node.left, 2 * c + 1, a);
    }
    if (a[2 * c + 2] !== undefined) {
      node.right = new Node();
      helper(node.right, 2 * c + 2, a);
    }
  };
  const root = new Node();
  helper(root, 0, a);
  return root;
};

console.log(serialize(bst));
console.log(deserialize(serialize(bst)));

