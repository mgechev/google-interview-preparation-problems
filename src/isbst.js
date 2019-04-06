const isBst = (root, min = -Infinity, max = Infinity) => {
  if (!root) {
    return true;
  }
  if (root.value >= min && root.value < max) {
    return isBst(root.left, min, Math.min(max, root.value)) && isBst(root.right, Math.max(root.value, min), max);
  }
  return false;
};

