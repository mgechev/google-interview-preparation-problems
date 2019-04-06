// https://www.geeksforgeeks.org/kth-smallest-element-in-bst-using-o1-extra-space/

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

const bst = new Node(
  20,
  new Node(
    8,
    new Node(
      4
    ),
    new Node(
      12,
      new Node(
        10,
      ),
      new Node(
        14
      )
    )
  ),
  new Node(
    22
  )
);

const kSmallest = (n, k) => {
  if (!n) {
    return k;
  }
  k = kSmallest(n.left, k);
  k -= 1;
  if (k === 0) {
    console.log(n.data);
    return;
  }
  k = kSmallest(n.right, k);
  return k;
};

kSmallest(bst, 3);
kSmallest(bst, 5);

