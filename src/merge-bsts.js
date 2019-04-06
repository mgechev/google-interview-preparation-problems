// https://www.geeksforgeeks.org/sum-numbers-formed-root-leaf-paths/

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

Node.prototype[Symbol.iterator] = function* (node = this) {
  if (!node) yield { done: true, value: undefined };
  if (node.left) yield* this[Symbol.iterator](node.left);
  yield node.data;
  if (node.right) yield* this[Symbol.iterator](node.right);
};

const bst1 = new Node(
  8,
  new Node(
    2,
    new Node(
      1
    ),
  ),
  new Node(
    10
  )
);

const bst2 = new Node(
  5,
  new Node(
    3,
    new Node(
      0
    ),
  ),
);

const printNodes = (a, b) => {
  let aGen = a[Symbol.iterator]();
  let bGen = b[Symbol.iterator]();
  let aNext = aGen.next();
  let bNext = bGen.next();
  while (!aNext.done && !bNext.done) {
    if (aNext.value < bNext.value) {
      console.log(aNext.value);
      aNext = aGen.next();
    } else {
      console.log(bNext.value);
      bNext = bGen.next();
    }
  }
  while (!aNext.done) {
    console.log(aNext.value);
    aNext = aGen.next();
  }
  while (!bNext.done) {
    console.log(bNext.value);
    bNext = bGen.next();
  }
};

console.log(printNodes(bst1, bst2));

