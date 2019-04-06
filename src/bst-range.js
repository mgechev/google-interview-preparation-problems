// https://www.geeksforgeeks.org/count-bst-nodes-that-are-in-a-given-range/

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

const bst = new Node(
  20,
  new Node(
    8,
    new Node(
      4
    ),
    new Node(
      12,
      new Node(
        10,
      ),
      new Node(
        14
      )
    )
  ),
  new Node(
    22
  )
);

const countNodes = (n, range) => {
  if (!n) {
    return 0;
  }
  let res = 0;
  if (range[0] <= n.data && range[1] >= n.data) {
    res = 1;
  }
  return res + countNodes(n.left, range) + countNodes(n.right, range);
};

const countNodesEfficient = (n, range) => {
  if (!n) {
    return 0;
  }
  if (range[0] <= n.data && range[1] >= n.data) {
    return 1 + countNodesEfficient(n.left, range) + countNodesEfficient(n.right, range);
  } else if (range[0] < n.data) {
    return countNodesEfficient(n.left, range);
  }
  return countNodesEfficient(n.right, range);
};


console.log(countNodes(bst, [10, 14]));
console.log(countNodesEfficient(bst, [10, 14]));

