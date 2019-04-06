const helper = (s, w, max, res = [], start = 0, memo = []) => {
  if (memo[start]) {
    return memo[start];
  }
  if (start >= s.length) {
    return [[]];
  }
  memo[start] = memo[start] || [];
  for (let i = start + 1; i <= Math.min(s.length, start + 1 + max); i += 1) {
    const sub = s.substring(start, i);
    if (w.has(sub)) {
      const results = helper(s, w, max, res, i, memo);
      for (let j = 0; j < results.length; j++) {
        memo[start].push([
          sub, ...results[j]
        ]);
      }
    }
  }
  return memo[start];
};

const wordBreak = (s, w) => {
  const max = w.reduce((a, c) => Math.max(a, c.length), 0);
  return helper(s, new Set(w), max).map(c => c.join(' '));
};

console.log(wordBreak('catsanddog', ['cat', 'cats', 'and', 'sand', 'dog']));

console.log(wordBreak('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', ['a','aa','aaa','aaaa','aaaaa','aaaaaa','aaaaaaa','aaaaaaaa','aaaaaaaaa','aaaaaaaaaa']));

