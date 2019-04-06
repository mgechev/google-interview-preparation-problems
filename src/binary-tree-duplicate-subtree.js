// https://www.geeksforgeeks.org/check-binary-tree-contains-duplicate-subtrees-size-2/

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

const bst = new Node(
  'A',
  new Node(
    'B',
    new Node(
      'D'
    ),
    new Node(
      'E'
    )
  ),
  new Node(
    'C',
    undefined,
    new Node(
      'B',
      new Node(
        'D'
      ),
      new Node(
        'E'
      )
    )
  )
);

const serialize = (node, res = []) => {
  if (!node) {
    return res;
  }
  serialize(node.left, res);
  res.push(node.data);
  serialize(node.right, res);
  return res;
};

const duplicateSubList = (list, min) => {
  for (let i = 0; i < list.length - min; i += 1) {
    const c = list.slice(i, i + min);
    for (let j = i + min; j < list.length - min; j += 1) {
      const cmp = list.slice(j, j + min);
      if (cmp.join('') === c.join('')) {
        return true;
      }
    }
  }
  return false;
};

const duplicate = root => {
  const list = serialize(root);
  return duplicateSubList(list, 2);
};

console.log(duplicate(bst));

