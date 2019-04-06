// https://www.geeksforgeeks.org/find-median-bst-time-o1-space/

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

const bst1 = new Node(
  6,
  new Node(
    3,
    new Node(
      1
    ),
    new Node(
      4
    )
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

const bst2 = new Node(
  6,
  new Node(
    3,
    new Node(
      1
    ),
    new Node(
      4
    )
  ),
  new Node(
    8,
    new Node(
      7
    )
  )
);

const numNodes = node => {
  if (!node) {
    return 0;
  }
  return 1 + numNodes(node.left) + numNodes(node.right);
};

const findNodes = (node, total, nodesIdx, nodes) => {
  if (!node) {
    return total;
  }
  const left = findNodes(node.left, total, nodesIdx, nodes);
  total = left + 1;
  if (nodesIdx[total]) {
    nodes.push(node);
  }
  return findNodes(node.right, total, nodesIdx, nodes);
};

const avg = a => a.reduce((a, c) => a + c, 0) / a.length;

const median = root => {
  const total = numNodes(root);
  let nodesIdx = { [Math.floor(total / 2)]: true };
  if (total % 2 === 0) {
    nodesIdx = {
      [total / 2 - 1]: true,
      [total / 2]: true
    };
  }
  const res = [];
  findNodes(root, -1, nodesIdx, res);
  return avg(res.map(r => r.data));
};

console.log(median(bst1));
console.log(median(bst2));
