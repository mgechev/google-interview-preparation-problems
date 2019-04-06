// https://www.geeksforgeeks.org/sum-numbers-formed-root-leaf-paths/

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


const sum = (node, s = 0) => {
  if (!node) return 0;
  if (!node.left && !node.right) return s;
  return sum(node.left, s * 10 + node.data) + sum(node.right, s * 10 + node.data);
}

console.log(sum(bst));

