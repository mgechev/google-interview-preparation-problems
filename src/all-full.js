// https://leetcode.com/problems/all-possible-full-binary-trees/description/
// Incorrect

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

const copy = (c, n) => {
  if (!n) return;
  if (n.left) {
    c.left = new TreeNode(n.left.val);
  }
  if (n.right) {
    c.right = new TreeNode(n.right.val);
  }
  copy(c.left, n.left);
  copy(c.right, n.right);
  return c;
};

const helper = (n, left, right, root, res, current = root) => {
  if (left + right > n) return;

  current.left = new TreeNode(0);
  current.right = new TreeNode(0);

  if (left + right === n) {
    res.push(copy(new TreeNode(0), root));
    return;
  }

  helper(n, left, right + 2, root, res, current.right);

  helper(n, left + 2, right + 2, root, res, current.left);
  current.left = new TreeNode(0);

  // Backtrack
  current.right = new TreeNode(0);
  helper(n, left + 2, right, root, res, current.left);
};

const allPossibleFBT = n => {
  const res = [];
  if (n < 1) return res;
  const root = new TreeNode(0);
  if (n === 1) return [root];
  root.left = new TreeNode(0);
  root.right = new TreeNode(0);
  helper(n - 3, 0, 0, root, res, root);
  return res;
};

//console.log(allPossibleFBT(5));
console.log(allPossibleFBT(9).length);
console.log(allPossibleFBT(7).length);
// console.log(JSON.stringify(allPossibleFBT(9), null, 2));

// [0,0,0,0,0,0,0,null,null,null,null,null,null,0,0]
// [0,0,0,0,0,0,0,null,null,null,null,0,0]

