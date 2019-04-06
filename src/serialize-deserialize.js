class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left || null;
    this.right = right || null;
  }
}

const serialize = (node, c = 0, res = []) => {
  if (!node) return res;
  res[c] = node.val;
  serialize(node.left, 2 * c + 1, res);
  serialize(node.right, 2 * c + 2, res);
  return res;
};

const deserialize = (data, c = 0, n) => {
  if (!data.length) return null;
  n = n || new TreeNode();
  n.val = data[c];
  const left = 2 * c + 1;
  if (data[left] !== undefined) {
    n.left = new TreeNode(data[left]);
    deserialize(data, left, n.left);
  }
  const right = 2 * c + 2;
  if (data[right] !== undefined) {
    n.right = new TreeNode(data[right]);
    deserialize(data, right, n.right);
  }
  return n;
};

const t = new TreeNode(
  1,
  new TreeNode(
    2
  ),
  new TreeNode(
    3,
    new TreeNode(
      4
    ),
    new TreeNode(
      5
    )
  )
);

//console.log(deserialize(serialize(t)));
console.log(deserialize(serialize(null)));
