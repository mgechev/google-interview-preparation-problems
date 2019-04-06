// https://www.careercup.com/question?id=5089243010433024


const revertLeafAndFix = (root, node) => {
  node.value = +!node.value;
  const fix = root => {
    if (!root) {
      return;
    }
    fix(root.left);
    fix(root.right);
    if (root.left && root.right) {
      root.value = root.left.value & root.right.value;
    }
  };
  fix(node);
  return root;
};

class Node {
  constructor(val) {
    this.value = val;
  }
}

const root = new Node(0);
root.left = new Node(0);
root.left.left = new Node(0);
root.left.right = new Node(1);
root.right = new Node(1);
root.right.left = new Node(1);
root.right.right = new Node(1);

