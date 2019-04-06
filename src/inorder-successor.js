// https://leetcode.com/problems/inorder-successor-in-bst/description/

class Node {
  constructor(data, left, right) {
    this.val = data;
    this.left = left;
    this.right = right;
  }
}

const bst = new Node(
  5,
  new Node(
    3,
    new Node(
      2,
      new Node(
        1
      ),
    ),
    new Node(
      4
    ),
  ),
  new Node(
    6,
  )
);

const bst2 = new Node(
  1,
  new Node(1)
);


const parent = (n, v) => {
  if (!n) return null;
  if (n.left && n.left.val === v) return n;
  if (n.right && n.right.val === v) return n;
  return parent(n.left, v) || parent(n.right, v);
};

const find = (n, v) => {
  if (!n) return;
  if (n.val === v) return n;
  return find(n.left, v) || find(n.right, v);
};

const inorderSuccessor = (root, v) => {
  const node = find(root, v);
  if (!node) return null;
  if (node.right) {
    let res = node.right;
    while (res.left) {
      res = res.left;
    }
    return res;
  }
  let p = parent(root, v);
  while (p && p.val < v) {
    p = parent(root, p.val);
  }
  return p || null;
};

//console.log(inorderSuccessor(bst, 6));
//console.log(inorderSuccessor(bst, 5));
//console.log(inorderSuccessor(bst, 1));
//console.log(inorderSuccessor(bst, 3));
//console.log(inorderSuccessor(bst, 4));

console.log(inorderSuccessor(bst2, 1));

