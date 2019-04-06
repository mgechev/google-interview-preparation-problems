const helper = (s, d, start = 0, memo = {}) => {
  if (memo[start] !== undefined) return memo[start];
  if (start >= s.length) return true;
  for (let i = start + 1; i <= s.length; i += 1) {
    const res = d.has(s.substring(start, i)) && helper(s, d, i, memo);
    if (res) {
      memo[start] = res;
      return res;
    }
  }
  memo[start] = false;
  return false;
};

const wordBreak = (s, d) => helper(s, new Set(d));

console.log(wordBreak("applepenapple", ["apple", "pen"]));

