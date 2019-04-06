// https://leetcode.com/problems/first-unique-character-in-a-string/

const firstUniqChar = s => {
  const m = {};
  for (let i = 0; i < s.length; i += 1) {
    m[s[i]] = (m[s[i]] || 0) + 1;
  }
  for (let i = 0; i < s.length; i += 1) {
    if (m[s[i]] === 1) {
      return i;
    }
  }
  return -1;
};

console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));

