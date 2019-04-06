class Node {
  constructor(data, left, right) {
    this.val = data;
    this.left = left;
    this.right = right;
  }
}

const bst = new Node(
  6,
  new Node(
    3,
    new Node(
      1
    ),
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

const find = (n, e, p) => {
  if (!n) return false;
  if (n.val === e) {
    p.push(n.val);
    return true;
  }
  if (find(n.left, e, p)) {
    p.push(n.val);
    return true;
  } else if (find(n.right, e, p)) {
    p.push(n.val);
    return true;
  }
  return false;
};

const lowestCommonAncestor = (root, p, q) => {
  const pp = [];
  find(root, p, pp);
  const qp = [];
  find(root, q, qp);
  const min = pp.length >= qp.length ? qp : pp;
  const max = pp.length < qp.length ? qp : pp;
  const found = {};
  for (let i = 0; i < min.length; i++) {
    found[min[i]] = true;
  }
  for (let i = 0; i < max.length; i++) {
    if (found[max[i]]) {
      return max[i];
    }
  }
  return -1;
};

console.log(lowestCommonAncestor(bst, 1, 9));

