// https://www.geeksforgeeks.org/longest-possible-chunked-palindrome/

const longestPalindrome = (s, i = 0, l = 1, cache = {}) => {
  cache[i] = cache[i] || {};
  if (i + l >= Math.floor(s.length / 2)) {
    return 1;
  }
  if (s.substring(i, i + l) !== s.substring(s.length - i - l, s.length - i)) {
    const res = longestPalindrome(s, i, l + 1, cache);
    cache[i][l] = res;
    return res;
  } else {
    const res = Math.max(
      longestPalindrome(s, i, l + 1, cache),
      2 + longestPalindrome(s, i + l, 1, cache)
    );
    cache[i][l] = res;
    return res;
  }
};

console.log(longestPalindrome('geeksforgeeks'));
console.log(longestPalindrome('ghiabcdefhelloadamhelloabcdefghi'));
console.log(longestPalindrome('antaprezatepzapreanta'));

