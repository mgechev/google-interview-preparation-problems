// https://www.geeksforgeeks.org/check-if-a-binary-tree-is-subtree-of-another-binary-tree/

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

const sub = new Node(
  'B',
  new Node(
    'D'
  ),
  new Node(
    'E'
  )
);

const bst = new Node(
  'A',
  new Node(
    'B',
    new Node(
      'D'
    ),
    new Node(
      'E'
    )
  ),
  new Node(
    'C',
    undefined,
  )
);

const match = (t1, t2) => {
  if (!t1 && !t2) {
    return true;
  }

  if (!t1) {
    return false;
  }

  if (!t2) {
    return false;
  }

  return t1.data === t2.data && match(t1.left, t2.left) && match(t1.right, t2.right);
};

const subtree = (tree, sub) => {
  if (!tree) {
    return false;
  }
  if (match(tree, sub)) {
    return true;
  }
  return subtree(tree.left, sub) || subtree(tree.right, sub);
};

console.log(subtree(bst, sub));
