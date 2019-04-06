const rob = (n, c = 0, memo = {}) => {
  if (memo[c] !== undefined) return memo[c];
  if (c >= n.length) return 0;
  const res = Math.max(n[c] + rob(n, c + 2, memo), rob(n, c + 1, memo));
  memo[c] = res;
  return res;
};

console.log(rob([2,7,9,3,1]));

