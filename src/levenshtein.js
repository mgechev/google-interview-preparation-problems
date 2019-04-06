const levenshtein = (s, t, i = 0, j = 0, c = {}) => {
  c[i] = c[i] || {};
  if (c[i][j] !== undefined) {
    return c[i][j];
  }
  if (i >= s.length) {
    return t.length - j;
  }
  if (j >= s.length) {
    return t.length - i;
  }
  const eq = +(s[i] === t[j]);
  const res = Math.min(
    levenshtein(s, t, i + 1, j + 1, c) + eq,
    levenshtein(s, t, i + 1, j, c) + 1,
    levenshtein(s, t, i, j + 1, c) + 1,
  );
  c[i][j] = res;
  return res;
};

console.log(levenshtein('kitten', 'sitting'));
console.log(levenshtein('kitten', 'sitten'));

