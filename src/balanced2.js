// https://leetcode.com/problems/balanced-binary-tree/description/

const height2 = (n, c) => {
  if (c.has(n)) {
    return c.get(n);
  }
  if (!n) {
    return 0;
  }
  const res = 1 + Math.max(height(n.left, c), height(n.right, c));
  c.set(n, res);
  return res;
};

const isBalanced2 = (node, cache = new Map()) => {
  if (!node) {
    return true;
  }
  return Math.abs(height(node.left, cache) - height(node.right, cache)) <= 1 &&
    isBalanced2(node.left, cache) && isBalanced2(node.right, cache);
};

class Tree {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }
}

const root = new Tree(
  new Tree(),
  new Tree(
    new Tree(
      new Tree()
    )
  )
);

const isBalanced = (n, h = [0]) => {
  if (!n) {
    return true;
  }
  const original = h[0];
  h[0] = original + 1;
  const left = isBalanced(n.left, h);
  const leftHeight = h[0];
  h[0] = original + 1;
  const right = isBalanced(n.right, h);
  const rightHeight = h[0];
  const height = Math.max(leftHeight, rightHeight);
  h[0] = height;
  return right && left && Math.abs(leftHeight - rightHeight) <= 1;
};

console.log(isBalanced(root));

