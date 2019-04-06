// https://leetcode.com/problems/minimum-depth-of-binary-tree/description/

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

var minDepth = function(root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  let min = Infinity;
  if (root.left) {
    min = Math.min(minDepth(root.left) + 1, min);
  }
  if (root.right) {
    min = Math.min(minDepth(root.right) + 1, min);
  }
  return min;
};

console.log(minDepth(bst));

