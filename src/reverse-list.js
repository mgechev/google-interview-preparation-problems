class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const helper = (n, prev = null, onHead) => {
  if (!n) return;
  if (!n.next) {
    onHead(n);
  }
  helper(n.next, n, onHead);
  n.next = prev;
};

const reverseList = n => {
  let head = n;
  helper(n, null, h => head = h);
  return head;
};

const n = new Node(1);
n.next = new Node(2);
n.next.next = new Node(3);
n.next.next.next = new Node(4);

const last = n.next.next.next;

console.log(reverseList(n));

