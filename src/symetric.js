// https://leetcode.com/problems/symmetric-tree/description/

const isSymmetric = n => {
  const helper = (a, b) => {
    if (!a && !b) return true;
    if (a && !b) return false;
    if (!a && b) return false;
    return a.val === b.val && helper(a.left, b.right) && helper(a.right, b.left);
  };
  if (!n) return true;
  return helper(n.left, n.right);
};
