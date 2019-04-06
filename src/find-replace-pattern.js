// https://leetcode.com/problems/find-and-replace-pattern/description/

const match = (p, w) => {
  if (p.length !== w.length) return false;
  const f = {};
  const b = {};
  for (let i = 0; i < w.length; i++) {
    if (f[p[i]] === undefined && b[w[i]] === undefined) {
      f[p[i]] = w[i];
      b[w[i]] = p[i];
    }
    if (w[i] !== f[p[i]] || p[i] !== b[w[i]]) return false;
  }
  return true;
};

const findAndReplacePattern = (w, p) => w.filter(match.bind(null, p));

console.log(findAndReplacePattern(['abc','deq','mee','aqq','dkd','ccc'], 'abb'));
