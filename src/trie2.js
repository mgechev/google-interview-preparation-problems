// https://leetcode.com/problems/implement-trie-prefix-tree/description/

class TrieNode {
  constructor() {
    this.children = {};
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(s) {
    let n = this.root;
    s.split('').forEach(l => {
      n.children[l] = n.children[l] || new TrieNode();
      n = n.children[l];
    });
    n.children['$'] = true;
  }

  search(s) {
    let n = this.root;
    for (let i = 0; i < s.length; i += 1) {
      const l = s[i];
      if (!n.children[l]) return false;
      n = n.children[l];
    }
    return n.children['$'] === true;
  }

  startsWith(p) {
    let n = this.root;
    for (let i = 0; i < p.length; i += 1) {
      const l = p[i];
      if (!n.children[l]) return false;
      n = n.children[l];
    }
    return true;
  }
}

