// https://leetcode.com/problems/coin-change/description/

const helper = (c, a, i = 0, cache = {}) => {
  cache[a] = cache[a] || {};
  if (cache[a][i] !== undefined) return cache[a][i];
  if (i >= c.length) return Infinity;
  if (a < 0) return Infinity;
  if (a === 0) return 0;
  cache[a][i] = Math.min(helper(c, a, i + 1, cache), 1 + helper(c, a - c[i], i, cache));
  return cache[a][i];
};

const coinChange = (c, a) => {
  const res = helper(c, a);
  if (isFinite(res)) return res;
  return -1;
};

console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 3));
console.log(coinChange([3,7,405,436], 8839));

