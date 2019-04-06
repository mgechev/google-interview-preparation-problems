// https://www.geeksforgeeks.org/ways-transforming-one-string-removing-0-characters/

const transform = (s, t, i = 0, j = 0, cache = {}) => {
  cache[i] = cache[i] || {};
  if (cache[i][j] !== undefined) {
    return cache[i][j];
  }
  if (i >= s.length && j >= t.length) {
    return 1;
  }
  if (j >= t.length) {
    return 1;
  }
  if (i >= s.length) {
    return 0;
  }
  const res = ((s[i] !== t[j]) ? 0 : transform(s, t, i + 1, j + 1, cache)) + transform(s, t, i + 1, j, cache);
  cache[i][j] = res;
  return res;
};

console.log(transform('abcccdf', 'abccdf'));
console.log(transform('aabba', 'ab'));
