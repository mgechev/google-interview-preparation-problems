class TrieNode {
  constructor() {
    this.children = {};
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i += 1) {
      const c = node.children[word[i]] || new TrieNode();
      node.children[word[i]] = c;
      node = c;
    }
  }

  hasPrefix(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i += 1) {
      const c = node.children[word[i]];
      if (!c) {
        return false;
      }
      node = c;
    }
    return true;
  }

  has(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i += 1) {
      const c = node.children[word[i]];
      if (!c) {
        return false;
      }
      node = c;
    }
    return Object.keys(node.children).length === 0;
  }
}

const t = new Trie();
t.insert('foobar');

console.log(t.hasPrefix('foo'));
console.log(t.hasPrefix('foo2'));
console.log(t.hasPrefix('foobar'));
console.log(t.has('foobar'));
console.log(t.has('foo'));

