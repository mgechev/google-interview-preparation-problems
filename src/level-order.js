// https://leetcode.com/problems/binary-tree-level-order-traversal/description/

class Node {
  constructor(data, left, right) {
    this.val = data;
    this.left = left;
    this.right = right;
  }
}

const bst = new Node(
  1,
  new Node(
    2,
    new Node(
      4
    )
  ),
  new Node(
    3,
    undefined,
    new Node(
      5
    )
  )
);

const levelOrder = n => {
  if (!n) return [];
  const res = [];
  let stack = [n];
  let idx = 0;
  while (stack.length) {
    let internal = [];
    while (stack.length) {
      const c = stack.pop();
      if (c.left) internal.unshift(c.left);
      if (c.right) internal.unshift(c.right);
      res[idx] = res[idx] || [];
      res[idx].push(c.val);
    }
    idx++;
    stack = internal;
  }
  return res;
};

console.log(levelOrder(bst));

