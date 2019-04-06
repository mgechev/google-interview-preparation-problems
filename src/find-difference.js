// https://leetcode.com/problems/find-the-difference/description/

const findAddedLetter = (s, t) => {
  const map = new Map();
  for (let i = 0; i < s.length; i += 1) {
    let num = 0;
    if (map.has(s[i])) {
      num = map.get(s[i]);
    }
    map.set(s[i], num + 1);
  }
  for (let i = 0; i < t.length; i += 1) {
    if (!map.has(t[i])) {
      return t[i];
    } else {
      const num = map.get(t[i]);
      if (num === 0) {
        return t[i];
      }
      map.set(t[i], num - 1);
    }
  }
  return undefined;
};

console.log(findAddedLetter('abcd', 'abcde'));
console.log(findAddedLetter('aa', 'aaa'));

