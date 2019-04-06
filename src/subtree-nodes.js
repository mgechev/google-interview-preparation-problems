// https://www.geeksforgeeks.org/sub-tree-nodes-tree-using-dfs/

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

const root = new Node(
  1,
  new Node(
    2,
    new Node(
      4
    )
  ),
  new Node(
    3,
    new Node(
      5
    ),
    new Node(
      6
    )
  )
);

const serialize = (node, c = 0, res = []) => {
  if (!node) {
    return res;
  }
  res[c] = node.data;
  serialize(node.left, 2 * c + 1, res);
  serialize(node.right, 2 * c + 2, res);
  return res;
};

const subtreeNodes = node => {
  const res = serialize(node);
  let parent = 0;
  let c = parent;
  let start = true;
  while (c < res.length) {
    if (res[c] !== undefined && res[c] !== '$') {
      let queue = [c];
      let nodes = [];
      let result = `Nodes for ${res[c]}: {`;
      while (queue.length) {
        let n = queue.shift();
        if (res[n] === '$' || res[n] === undefined) {
          continue;
        }
        queue.push(2 * n + 1);
        queue.push(2 * n + 2);
        if (n !== c) {
          nodes.push(res[n]);
        }
      }
      result += nodes.join(', ') + '}';
      if (nodes.length) {
        console.log(result);
      }
    }
    if (c === parent) {
      c = 2 * parent + 1;
    } else if (c === 2 * parent + 1) {
      c = 2 * parent + 2;
    } else if (c === 2 * parent + 2) {
      parent = 2 * parent + 1;
      c = 2 * parent + 1;
    }
  }
};

console.log(subtreeNodes(root));

