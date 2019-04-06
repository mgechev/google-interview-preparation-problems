class Trie {
  constructor() {
    this.root = {};
  }

  insert(word, node = this.root, idx = 0) {
    if (idx >= word.length) {
      return;
    }
    node[word[idx]] = node[word[idx]] || {};
    this.insert(word, node[word[idx]], idx + 1);
  }

  match(pattern, node = this.root, idx = 0) {
    if (idx >= pattern.length) {
      return true;
    }
    if (!node) {
      return false;
    }
    if (pattern[idx] === '*') {
      return Object.keys(node).reduce((accum, key) => {
        return accum || this.match(pattern, node[key], idx + 1);
      }, false);
    } else {
      if (!node[pattern[idx]]) {
        return false;
      }
      return this.match(pattern, node[pattern[idx]], idx + 1);
    }
  }
}

const trie = new Trie();
trie.insert('foo');
trie.insert('bar');
trie.insert('bar');
trie.insert('quxbar');

console.log(JSON.stringify(trie.root, null, 2));

console.assert(trie.match(''));
console.assert(trie.match('foo'));
console.assert(trie.match('f*o'));
console.assert(trie.match('f**'));
console.assert(!trie.match('z**'));
console.assert(!trie.match('bay'));
console.assert(!trie.match('b*y'));
console.assert(!trie.match('b**z'));
console.assert(trie.match('quxbar'));
console.assert(trie.match('bar'));
console.assert(trie.match('qu*ba*'));
console.assert(trie.match('******'));
console.assert(!trie.match('*******'));

