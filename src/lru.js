// https://leetcode.com/problems/lru-cache/description/

class Node {
  constructor(key, val, next, prev) {
    this.val = val;
    this.key = key;
    this.next = next;
    this.prev = prev;
  }
}

class LRUCache {
  constructor(cap) {
    this.cap = cap;
    this.first = null;
    this.map = new Map();
    this.total = 0;
  }

  put(key, val) {
    if (this.map.has(key)) {
      this.map.get(key).val = val;
      this._moveFirst(key);
    } else {
      if (this.cap <= 0) {
        return;
      }
      const node = new Node(key, val);
      this.map.set(key, node);
      node.next = this.first;
      if (this.first) {
        this.first.prev = node;
      }
      this.first = node;
      if (!this.last) {
        this.last = node;
      } else if (this.last === node.next) {
        this.last.prev = this.first;
      }
      this.total++;
      if (this.total > this.cap && this.last) {
        this.total--;
        this.map.delete(this.last.key);
        if (this.last.prev) {
          const prev = this.last.prev;
          prev.next = null;
          this.last = prev;
        } else {
          this.last = this.first = null;
        }
      }
    }
  }

  get(key) {
    if (!this.map.has(key)) return -1;
    const val = this.map.get(key).val;
    this._moveFirst(key);
    return val;
  }

  _moveFirst(key) {
    // Move to first position
    const node = this.map.get(key);
    if (node === this.first) return;
    const next = node.next;
    const prev = node.prev;
    if (prev) {
      prev.next = next;
    }
    if (next) {
      next.prev = prev;
    }
    this.first.prev = node;
    node.next = this.first;
    node.prev = null;
    this.first = node;
    if (node === this.last) {
      this.last = prev;
    }
  }
}

// 1, -1, -1, 3, 4
//const cache = new LRUCache(2);
//cache.put(1, 1);
//cache.put(2, 2);
//console.log(cache.get(1));       // returns 1
//cache.put(3, 3);    // evicts key 2
//console.log(cache.get(2));       // returns -1 (not found)
//cache.put(4, 4);    // evicts key 1
//console.log(cache.get(1));       // returns -1 (not found)
//console.log(cache.get(3));       // returns 3
//console.log(cache.get(4));       // returns 4

//const c2 = new LRUCache(1);
//c2.put(2, 1);
//console.log(c2.get(2));

const c3 = new LRUCache(3);
c3.put(1, 1);
c3.put(2, 2);
c3.put(3, 3);
c3.put(4, 4);
console.log(c3.get(4));
console.log(c3.get(3));
console.log(c3.get(2));
console.log(c3.get(1));
c3.put(5, 5);
console.log(c3.get(1));
console.log(c3.get(2));
console.log(c3.get(3));
console.log(c3.get(4));
console.log(c3.get(5));
