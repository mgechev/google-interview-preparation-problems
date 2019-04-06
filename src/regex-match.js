// https://leetcode.com/problems/regular-expression-matching/

const dot = l => l !== undefined;
const literal = a => b => a === b;

const getMatcher = re => {
  if (re === '.') return dot;
  if (re !== '*') return literal(re);
  throw new Error('Invalid regexp');
};

const isMatch = (s, p, i = 0, j = 0) => {
  if (i >= s.length && j >= p.length) {
    return true;
  }
  if (j > p.length) {
    return false;
  }
  if (j === 0 && p[j] === '*') {
    throw new Error('Invalid regexp');
  }
  if (p[j + 1] === '*') {
    const m = getMatcher(p[j]);
    for (let outer = s.length - 1; outer >= i; outer -= 1) {
      let match = false;
      for (let inner = outer; inner >= i && (match || inner === outer); inner -= 1) {
        match = m(s[inner]);
      }
      if (match && isMatch(s, p, outer + 1, j + 2)) {
        return true;
      }
    }
    return isMatch(s, p, i, j + 2);
  }
  if (getMatcher(p[j])(s[i])) {
    return isMatch(s, p, i + 1, j + 1);
  }
  return false;
};

console.log(isMatch('abcd', 'ax*.d'));
console.log(isMatch('abcd', 'a.*d'));
console.log(isMatch('ab', '.*'));
console.log(isMatch('aab', 'aabc*'));
console.log(isMatch('mississippi', 'mis*is*p*.'));

