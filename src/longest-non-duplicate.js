// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

const lengthOfLongestSubstring = str => {
  let l = 0;
  let r = 0;
  let s = 0;
  let e = 0;
  let seen = {};
  seen[str[l]] = true;
  while (r < str.length) {
    r++;
    if (seen[str[r]]) {
      while (l < r) {
        seen[str[l]] = false;
        l++;
      }
    }
    seen[str[r]] = true;
    if (r - l > e - s) {
      [s, e] = [l, r];
    }
  }
  console.log(s, e);
  return str.substring(s, e + 1);
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
