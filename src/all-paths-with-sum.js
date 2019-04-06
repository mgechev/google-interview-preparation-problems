const printPaths = (root, num, original = num) => {
  if (!root) {
    return !num;
  }
  if (!num) {
    return true; 
  }
  let same = false;
  if (num === original) {
    same = printPaths(root.left, num, original) || printPaths(root.right, num, original);
  }
  const minus = printPaths(root.left, num - root.value, original) || printPaths(root.right, num - root.value, original);
  if (minus) {
    console.log(root.value);
    if (num === original) {
      console.log();
    }
  }
  return same || minus;
};


class Node {
  constructor(val) {
    this.value = val;
  }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.right.left = new Node(4);
root.right.right = new Node(5);

printPaths(root, 4);

