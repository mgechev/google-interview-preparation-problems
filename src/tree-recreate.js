class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class Tree {
}

const toList = root => {
  if (!root) {
    return [];
  }
  const result = [];
  const queue = [[root, 0]];
  while (queue.length) {
    const [current, id] = queue.pop();
    result[id] = current.value;
    if (current.left) {
      queue.push([current.left, 2 * id + 1]);
    }
    if (current.right) {
      queue.push([current.left, 2 * id + 2]);
    }
  }
  return result;
};

const toTree = (list, parent = new Node(list[0]), idx = 0) => {
  if (!list.length) {
    return;
  }
  if (list[idx * 2 + 1] !== undefined) {
    const left = new Node(list[idx * 2 + 1]);
    parent.left = left;
    toTree(list, left, 2 * idx + 1);
  }
  if (list[idx * 2 + 2] !== undefined) {
    const right = new Node(list[idx * 2 + 2]);
    parent.right = right;
    toTree(list, right, 2 * idx + 2);
  }
  return parent;
};

const node = new Node(5);
node.left = new Node(3);
node.left.left = new Node(1);

node.right = new Node(2);
node.right.right = new Node(1);
node.right.left = new Node(6);
