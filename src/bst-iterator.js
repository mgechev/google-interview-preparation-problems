class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const root = new TreeNode(
  5,
  new TreeNode(
    4,
    new TreeNode(
      2
    ),
    new TreeNode(
      4.5
    )
  ),
  new TreeNode(
    7
  )
);

const root2 = new TreeNode(
  5,
  new TreeNode(
    4,
    new TreeNode(
      2
    ),
  ),
);

function* bstIterator(node) {
  if (!node) return { done: true, value: undefined };
  if (node.left) yield* bstIterator(node.left);
  yield node.val;
  if (node.right) yield* bstIterator(node.right);
}

class BSTIterator {
  constructor(root) {
    this.root = root;
    this._gen = bstIterator(root);
    this._current = this._gen.next();
  }

  hasNext() {
    return !this._current.done;
  }

  next() {
    const val = this._current.value;
    if (this.hasNext()) {
      this._current = this._gen.next();
    }
    return val;
  }
}


class BSTIter2 {
  constructor(root) {
    this.node = root;
    this.stack = [this.node];
  }

  hasNext() {
    return this.stack.length !== 0;
  }

  next() {
    while (this.node && this.node.left) {
      this.node = this.node.left;
      this.stack.push(this.node);
    }
    const res = this.stack.pop();
    if (res.right) {
      this.stack.push(res.right);
      this.node = res.right;
    }
    return res.val;
  }
}

//const bst2 = new BSTIter2(root2);
//while (bst2.hasNext()) {
//  console.log(bst2.next());
//}

function traverse(node) {
  let stack = [node];
  let c = stack[stack.length - 1];
  while (stack.length) {
    while (c && c.left) {
      c = c.left;
      stack.push(c);
    }
    c = stack.pop();
    console.log(c.val)
    if (c.right) {
      stack.push(c.right);
      c = c.right;
    }
  }
}

const inorderTraversal = root => {
  const stack = [];
  if (root) {
    stack.push(root);
  }
  const res = [];
  let c = stack[stack.length - 1];
  let goLeft = true;
  while (stack.length) {
    while (goLeft && c && c.left) {
      c = c.left;
      stack.push(c);
    }
    c = stack.pop();
    res.push(c.val);
    if (c.right) {
      stack.push(c.right);
      goLeft = true;
      c = c.right;
    } else {
      goLeft = false;
    }
  }
  return res;
}

console.log(inorderTraversal(root2));

