// https://leetcode.com/problems/flatten-nested-list-iterator/
// Keep in mind that the ugly NestedInteger of leetcode is different format.

class NestedInteger {
  constructor(d) {
    this.d = d;
  }

  isInteger() {
    return typeof this.d === 'number';
  }

  getInteger() {
    if (this.isInteger()) {
      return this.d;
    }
    return null;
  }

  getList() {
    if (!this.isInteger()) {
      return this.d;
    }
    return null;
  }
}

const e1 = new NestedInteger(
  [
    new NestedInteger([
      new NestedInteger(1),
      new NestedInteger(1),
    ]),
    new NestedInteger(2),
    new NestedInteger([
      new NestedInteger(1),
      new NestedInteger(1),
    ])
  ]
);

const e2 = new NestedInteger(
  [
    new NestedInteger(1),
    new NestedInteger([
      new NestedInteger(4),
      new NestedInteger([
        new NestedInteger(6)
      ]),
    ])
  ]
);


class NestedIterator {
  constructor(list) {
    this.l = list;
    this.s = [];
    if (list && (list.isInteger() || list.getList().length > 0)) {
      if (list.isInteger()) {
        this.s.push(list);
      }
      this.s = [{
        l: list,
        i: 0
      }];
    }
  }

  hasNext() {
    return this.s.length > 0;
  }

  next() {
    const { s } = this;
    while (s.length && !(s[s.length - 1] instanceof NestedInteger)) {
      const top = s[s.length - 1];
      if (top.i + 1 >= top.l.getList().length) {
        s.pop();
      }
      if (top.l.getList()[top.i].isInteger()) {
        s.push(top.l.getList()[top.i]);
      } else {
        s.push({
          i: 0,
          l: top.l.getList()[top.i]
        });
      }
      top.i++;
    }
    if (!s.length) {
      return -1;
    }
    return s.pop().getInteger();
  }
}

const iter = new NestedIterator(e1);
console.log(iter.hasNext());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.hasNext());
console.log(iter.next());
console.log(iter.hasNext());
console.log(iter.next());

console.log('-----------');

const iter2 = new NestedIterator(e2);
console.log(iter2.hasNext());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.hasNext());
console.log(iter2.next());
console.log(iter2.hasNext());
console.log(iter2.next());
