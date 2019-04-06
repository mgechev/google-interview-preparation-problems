// https://leetcode.com/problems/merge-k-sorted-lists/description/

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const mergeKLists = lists => {
  let done = 0;
  let current;
  let head = null;
  for (let i = 0; i < lists.length; i += 1) {
    if (!lists[i]) done += 1;
  }
  while (done < lists.length) {
    let min = Infinity;
    let minIdx = -1;
    for (let i = 0; i < lists.length; i += 1) {
      if (lists[i] && min > lists[i].val) {
        min = lists[i].val;
        minIdx = i;
      }
    }
    const prev = current;
    current = new ListNode(min);
    if (prev) {
      prev.next = current;
    } else {
      head = current;
    }
    lists[minIdx] = lists[minIdx].next;
    if (!lists[minIdx]) {
      done += 1;
    }
  }
  return head;
};

const a = new ListNode(1);
a.next = new ListNode(2);
a.next.next = new ListNode(3);

const b = new ListNode(2);
b.next = new ListNode(10);

const c = null;

const res = mergeKLists([a, b, c]);
console.log(res);
debugger;
