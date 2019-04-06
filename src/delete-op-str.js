// https://leetcode.com/problems/delete-operation-for-two-strings/description/

const minDistance = (s, t, i = 0, j = 0, c = []) => {
  c[i] = c[i] || [];
  if (c[i][j] !== undefined) {
    return c[i][j];
  }
  if (i >= s.length || j >= t.length) {
    return Math.max(s.length - i, t.length - j);
  }
  if (s[i] === t[j]) {
    const res = minDistance(s, t, i + 1, j + 1);
    c[i][j] = res;
    return res;
  }
  const res = 1 + Math.min(minDistance(s, t, i + 1, j, c), minDistance(s, t, i, j + 1, c));
  c[i][j] = res;
  return res;
};

//console.log(minDistance('sea', 'eat'));
//console.log(minDistance('foo', 'bar'));
//console.log(minDistance('qux', 'qax'));
//console.log(minDistance('foo', 'foor'));
//
//console.log(minDistance('dinitrophenylhydrazine', 'acetylphenylhydrazine'));
console.log(minDistance('ykbydsvcrbvphtwbztcyerpsyqgqqbdfxsotousoulqiczhoj', 'erfkhsdtjywmfjtmhmvekwgvotutvbbpbzeznjoyhtukk'));

