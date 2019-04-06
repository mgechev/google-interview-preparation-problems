// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

const lengthOfLongestSubstring = s => {
  if (!s) return 0;
  let left = 0;
  let right = 1;
  let maxLeft = 0;
  let maxRight = 0;
  let map = {};
  map[s[left]] = true;
  while (right < s.length) {
    if (s[right] === s[left]) {
      map[s[left]] = false;
      left += 1;
    }
    if (map[s[right]]) {
      map[s[left]] = false;
      left += 1;
      continue;
    } else {
      map[s[right]] = true;
    }
    if (right - left > maxRight - maxLeft) {
      maxRight = right;
      maxLeft = left;
    }
    right += 1;
  }
  return maxRight + 1 - maxLeft;
};

console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('dvdf'));
console.log(lengthOfLongestSubstring('ohvhjdml'));
console.log(lengthOfLongestSubstring('tmmzuxt'));

