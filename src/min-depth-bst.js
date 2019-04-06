// https://www.geeksforgeeks.org/find-minimum-depth-of-a-binary-tree/

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
      1
    ),
  ),
  new Node(
    8,
    new Node(
      7
    ),
    new Node(
      9
    )
  )
);

const minDepth = bst => {
  if (!bst) {
    return 0;
  }
  return 1 + Math.min(minDepth(bst.left), minDepth(bst.right));
};

console.log(minDepth(bst));

