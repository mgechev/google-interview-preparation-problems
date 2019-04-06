// https://leetcode.com/problems/isomorphic-strings/description/

const isIsomorphic2 = (s, t) => {
  for (let i = 0; i < s.length - 1; i++) {
    for (let j = 1; j < s.length; j++) {
      if (s[i] === s[j] && t[i] !== t[j] ||
          t[i] === t[j] && s[i] !== s[j]) {
        return false;
      }
    }
  }
  return true;
};

const isIsomorphic3 = (s, t, i = 0, r = {}) => {
  if (i >= s.length) {
    return true;
  }
  if (s[i] === t[i]) {
    return isIsomorphic(s, t, i + 1, r);
  }
  const ex = r[s[i]];
  if (ex === undefined) {
    r[s[i]] = t[i];
    return isIsomorphic(s, t, i + 1, r);
  }
  if (r[s[i]] !== t[i]) {
    return false;
  }
  return isIsomorphic(s, t, i + 1, r);
};

const isIsomorphic = (s, t) => {
  const rs = {};
  const rt = {};
  debugger;
  for (let i = 0; i < s.length; i++) {
    const exs = rs[s[i]];
    const ext = rt[t[i]];
    if (exs === undefined && ext === undefined) {
      rs[s[i]] = t[i];
      rt[t[i]] = s[i];
      continue;
    }
    if (rs[s[i]] !== t[i] || rt[t[i]] !== s[i]) {
      return false;
    }
  }
  return true;
};



console.log(isIsomorphic('egg', 'add'));
console.log(isIsomorphic('foo', 'bar'));
console.log(isIsomorphic('paper', 'title'));
console.log(isIsomorphic('ab', 'aa'));
console.log(isIsomorphic('aba', 'baa'));
