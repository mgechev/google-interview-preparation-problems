const height = root => {
  if (!root) {
    return 0;
  }
  return 1 + Math.max(height(root.left), height(root.right));
};

const isBalancedHelper = (root, cache) => {
  if (!root) {
    return true;
  }
  const leftHeight = cache.get(root.left) || height(root.left);
  cache.set(root.left, leftHeight);
  const rightHeight = cache.get(root.right) || height(root.right);
  cache.set(root.right, rightHeight);
  return Math.abs(leftHeight - rightHeight) <= 1;
};

const isBalanced = root => {
  const cache = new Map();
  return isBalancedHelper(root, cache);
};

