// https://www.geeksforgeeks.org/longest-common-substring/

const helper = (s, t, m, i = s.length - 1, j = t.length - 1) => {
  if (i < 0 || j < 0) {
    return;
  }
  if (m[i + 1][j + 1] === undefined) {
    return;
  }
  if (m[i][j] !== undefined) {
    return m[i][j];
  }
  m[i] = m[i] || [];
  m[i][j] = s[i] === t[j] ? m[i + 1][j + 1] + 1 : 0;
  helper(s, t, m, i - 1, j);
  helper(s, t, m, i, j - 1);
};


const longestCommonSubsequence = (s, t) => {
  const m = [];
  let max = 0;
  let mi = 0;
  for (let i = 0; i <= s.length; i += 1) {
    m[i] = [];
    m[i][t.length] = 0;
  }
  m[s.length] = [];
  for (let i = 0; i <= t.length; i += 1) {
    m[s.length][i] = 0;
  }
  helper(s, t, m);
  for (let i = 0; i < m.length; i += 1) {
    for (let j = 0; j < m[i].length; j += 1) {
      if (m[i][j] > max) {
        max = m[i][j];
        mi = i;
      }
    }
  }
  return s.substr(mi, max);
};

console.log(longestCommonSubsequence('geeksforgeeks', 'geeksquiz'));
console.log(longestCommonSubsequence('superminkoawesome', 'minkolivesinsanfrancisco'));
