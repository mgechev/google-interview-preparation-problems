// https://www.geeksforgeeks.org/longest-common-subsequence/

const helper = (s, t, i = s.length - 1, j = t.length - 1, m = {}) => {
  if (i < 0 || j < 0) {
    return 0;
  }
  m[i] = m[i] || [];
  if (m[i][j] !== undefined) {
    return m[i][j];
  }
  const inc = s[i] === t[j] ? 1 : 0;
  const res = inc + Math.max(
    helper(s, t, i - 1, j, m),
    helper(s, t, i, j - 1, m),
  );
  m[i][j] = res;
  return res;
};

const longestCommonSubsequence = (s, t) => {
  return helper(s, t);
};

const helper2 = (s, t, i = s.length - 1, j = t.length - 1, m = {}) => {
  if (i < 0 || j < 0) {
    return '';;
  }
  m[i] = m[i] || [];
  if (m[i][j] !== undefined) {
    return m[i][j];
  }
  const inc = s[i] === t[j] ? s[i] : '';
  const left = inc + helper2(s, t, i - 1, j, m);
  const right = inc + helper2(s, t, i, j - 1, m);
  m[i][j] = right;
  if (left.length > right.length) {
    m[i][j] = left;
  }
  return m[i][j];
};

const longestCommonSubsequence2 = (s, t) => {
  return helper2(s, t).split('').reverse().join('');
};

console.log(longestCommonSubsequence('ABCDGH', 'AEDFHR'));
console.log(longestCommonSubsequence2('ABCDGH', 'AEDFHR'));

