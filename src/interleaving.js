// https://practice.geeksforgeeks.org/problems/interleaved-strings/1

const interleaving = (s, a, b, k = 0, i = 0, j = 0, m = {}) => {
  m[k] = m[k] || {};
  m[k][i] = m[k][i] || {};
  if (m[k][i][j] !== undefined) {
    return m[k][i][j];
  }
  if (k >= s.length && (i < a.length || j < b.length)) {
    return false;
  }
  if (i >= a.length && j >= a.length) {
    return true;
  }
  const res = [
    interleaving(s, a, b, k + 1, i, j, m),
  ];
  if (s[k] === a[i]) {
    res.push(interleaving(s, a, b, k + 1, i + 1, j, m));
  }
  if (s[k] === b[j]) {
    res.push(interleaving(s, a, b, k + 1, i, j + 1, m));
  }
  m[k][i][j] = res.reduce((a, c) => a || c, false);
  return m[k][i][j];
};

console.log(interleaving('xxy', 'x', 'yx'));
console.log(interleaving('xxy', 'x', 'xy'));

