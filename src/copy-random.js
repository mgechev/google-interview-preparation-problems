// https://leetcode.com/problems/copy-list-with-random-pointer/

class RandomListNode {
  constructor(label) {
    this.label = label;
    this.next = this.random = null;
  }
}

const copyRandomList = head => {
  if (!head) return null;
  const h = new RandomListNode(head.label);
  const visited = new Map();
  visited.set(head, h);
  const copyHead = (head, h, prop = 'next', rep = new Set()) => {
    do {
      if (rep.has(head)) {
        break;
      }
      if (prop === 'next') {
        copyHead(head, h, 'random');
      }
      if (head[prop] !== null && visited.has(head[prop])) {
        h[prop] = visited.get(head[prop]);
      } else if (head[prop] !== null) {
        h[prop] = new RandomListNode(head[prop].label);
        visited.set(head[prop], h[prop]);
      }
      h = h[prop];
      rep.add(head);
      head = head[prop];
    } while (head);
  };
  copyHead(head, h);
  return h;
};

//const a = new RandomListNode('a');
//a.next = new RandomListNode('b');
//a.next.next = new RandomListNode('c');
//a.next.next.next = new RandomListNode('d');
//a.next.next.next.next = new RandomListNode('e');
//
//a.next.random = a;
//a.next.next.random = a.next.next.next;

const a = new RandomListNode('-1');
a.random = a;

console.log(copyRandomList(a));
console.log(a);

