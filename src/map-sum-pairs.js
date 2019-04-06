var Node = function (val) {
  this.val = val;
  this.children = {};
}

/**
 * Initialize your data structure here.
 */
var MapSum = function() {
  this.root = new Node();    
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
  let node = this.root;
  for (let i = 0; i < key.length; i += 1) {
    const n = node.children[key[i]] || new Node();
    node.children[key[i]] = n;
    node = n;
  }
  node.val = val;
  return null;
}

const totalSum = n => {
  if (!n) {
    return 0;
  }
  const c = n.val || 0;
  return Object.keys(n.children).reduce((a, c) => {
    return totalSum(n.children[c]) + a;
  }, c);
}

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
  let node = this.root;
  for (let i = 0; i < prefix.length; i += 1) {
    const n = node.children[prefix[i]];
    if (!n) {
      return 0;
    }
    node = n;
  }
  return totalSum(node);
}

const c = new MapSum();
c.insert('apple', 3);
console.log(c.sum('ap'));
c.insert('app', 2);
console.log(c.sum('ap'));

