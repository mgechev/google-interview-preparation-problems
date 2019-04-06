// https://www.geeksforgeeks.org/find-the-longest-substring-with-k-unique-characters-in-a-given-string/

const longestSubStrUnique = (s, u, i = 0, chars = {}, str = '', c = {}) => {
  if (i >= s.length) {
    return u === 0 ? str : '';
  }
  c[i] = c[i] || {};
  c[i][u] = c[i][u] || {};
  if (c[i][u][str.length]) {
    return c[i][u][str.length];
  }
  const non = longestSubStrUnique(s, u, i + 1, {}, '', c);
  if (!chars[s[i]]) {
    u -= 1;
  }
  chars[s[i]] = true;
  str += s[i];
  c[i][u] = c[i][u] || {};
  const inc = longestSubStrUnique(s, u, i + 1, chars, str, c);
  if (non.length > inc.length) {
    c[i][u][str.length] = non;
    return non;
  }
  c[i][u][str.length] = inc;
  return inc;
};

console.log(longestSubStrUnique('aabbcc', 1));
console.log(longestSubStrUnique('aabbcc', 2));
console.log(longestSubStrUnique('aabbcc', 3));
console.log(longestSubStrUnique('aabbcc', 4));

