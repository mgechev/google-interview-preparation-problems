// https://leetcode.com/problems/sentence-similarity/description/

const similar = (a, b, p) => {
  if (a === b) {
    return true;
  }
  for (let i = 0; i < p.length; i += 1) {
    if (p[i].has(a) && p[i].has(b)) {
      return true;
    }
  }
  return false;
};

const allSimilar = (w1, w2, p) => {
  for (let i = 0; i < w1.length; i += 1) {
    if (!similar(w1[i], w2[i], p)) {
      return false;
    }
  }
  return true;
};

const areSentencesSimilar = (w1, w2, p) => {
  if (w1.length !== w2.length) {
    return false;
  }
  const pairs = [];
  for (let i = 0; i < p.length; i += 1) {
    const set = new Set();
    pairs.push(set);
    for (let j = 0; j < p[i].length; j += 1) {
      set.add(p[i][j]);
    }
  }
  return allSimilar(w1, w2, pairs);
};

