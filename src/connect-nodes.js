// https://www.geeksforgeeks.org/connect-nodes-level-level-order-traversal/

class Node {
  constructor(data, left, right) {
    this.data = data;
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
    new Node(
      4
    )
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

const helper = (n, m, h = 0) => {
  if (!n) {
    return;
  }
  m[h] = m[h] || [];
  m[h].push(n);
  helper(n.left, m, h + 1);
  helper(n.right, m, h + 1);
};

const connect = n => {
  const lst = [];
  helper(n, lst);
  lst.forEach(l => {
    for (let i = 1; i < l.length; i += 1)
      l[i - 1].next = l[i];
    l[l.length - 1].next = null;
  });
};

// Alternative of the two queues
// is to use `null` as a separator.
const connectBFS = n => {
  let q = [n];
  while (q.length) {
    let next = [];
    let c = q.shift();
    while (c) {
      if (c.left) {
        next.push(c.left);
      }
      if (c.right) {
        next.push(c.right);
      }
      const s = q.shift();
      c.next = s || null;
      c = s;
    }
    q = next;
  }
};

connectBFS(bst);

console.log(bst);

