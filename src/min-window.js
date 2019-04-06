// https://leetcode.com/problems/minimum-window-substring/description/

const minWindow = (s, t) => {
  const valid = (a, b) => {
    const ka = Object.keys(a);
    const kb = Object.keys(b);
    if (ka.length !== kb.length) {
      return false;
    }
    return ka.reduce((k, x) => {
      return k && a[x] >= b[x];
    }, true);
  };
  if (s.length < t.length) {
    return '';
  }
  let chars = {};
  for (let i = 0; i < t.length; i += 1) {
    chars[t[i]] = (chars[t[i]] || 0) + 1;
  }
  let left = 0;
  let right = 0;
  let minLeft = 0;
  let minRight = s.length;
  let map = {};
  while (right < s.length) {
    if (chars[s[right]]) {
      map[s[right]] = map[s[right]] || 0;
      map[s[right]] += 1;
    }
    if (valid(map, chars)) {
      while (left < right && (!chars[s[left]] || chars[s[left]] < map[s[left]])) {
        left += 1;
        if (map[s[left - 1]]) {
          map[s[left - 1]] -= 1;
        }
      }
      if (right - left < minRight - minLeft) {
        minRight = right;
        minLeft = left;
      }
    }
    right += 1;
  }
  return valid(map, chars) ? s.substring(minLeft, minRight + 1) : '';
}

console.log(minWindow('ADOBECODEBANC', 'ABC'));
console.log(minWindow('ADOBFANBC', 'ABC'));
console.log(minWindow('A', 'AA'));
console.log(minWindow('B', 'A'));
console.log(minWindow('AA', 'AA'));

