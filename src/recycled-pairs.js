// https://www.geeksforgeeks.org/number-recycled-pairs-array/

const digitsSum = a => {
  let i = 0;
  while (a) {
    i += a % 10;
    a = Math.floor(a / 10);
  }
  return i;
};

const digitsCount = a => {
  let i = 0;
  while (a) {
    a = Math.floor(a / 10);
    i += 1;
  }
  return i;
};

class Node {
  constructor(d) {
    this.data = d;
  }
}

class List {
  add(d) {
    if (!this.start) {
      this.end = this.start = new Node(d);
      return;
    }
    const prev = this.end;
    prev.next = new Node(d);
    this.end = prev.next;
  }

  rotate() {
    if (this.start === this.end) {
      return;
    }
    const f = this.start;
    this.start = f.next;
    this.end.next = f;
    this.end = f;
    this.end.next = null;
  }
}

const serialize = l => {
  let s = l.start;
  let res = s.data;
  s = s.next;
  while (s) {
    res *= 10;
    res += s.data;
    s = s.next;
  }
  return res;
};

const recycled = (a, b) => {
  let bak = a;
  if (a === b) {
    return false;
  }
  const list = new List();
  let len = 0;
  let digits = [];
  while (a) {
    len += 1;
    digits.push(a % 10);
    a = Math.floor(a / 10);
  }
  digits = digits.reverse();
  digits.forEach(d => list.add(d));
  while (len) {
    list.rotate();
    if (serialize(list) === b) {
      return true;
    }
    len -= 1;
  }
  return false;
};

const totalRecycledPairs = a => {
  const used = {};
  const res = [];
  const formatted = [];
  for (let i = 0; i < a.length; i += 1) {
    const n = digitsCount(a[i]);
    formatted[n] = formatted[n] || [];
    const sum = digitsSum(a[i]);
    formatted[n][sum] = formatted[n][sum] || [];
    formatted[n][sum].push(a[i]);
  }
  formatted.forEach(b => {
    if (b.length <= 1) {
      return;
    }
    b.forEach(e => {
      for (let i = 0; i < e.length - 1; i += 1) {
        for (let j = i + 1; j < e.length; j += 1) {
          if (!used[e[i]] && !used[e[j]] && recycled(e[i], e[j])) {
            res.push(e[i], e[j]);
          }
        }
      }
    });
  });
  return res;
};

console.log(totalRecycledPairs([32, 42, 13, 23, 9, 5, 31]));
console.log(totalRecycledPairs([1212, 2121]));
