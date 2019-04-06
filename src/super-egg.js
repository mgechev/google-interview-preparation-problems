// https://leetcode.com/problems/super-egg-drop/description/

const superEggDrop = (e, n, cache = {}) => {
  cache[e] = cache[e] || {};
  if (cache[e][n] !== undefined) {
    return cache[e][n];
  }
  if (n === 1 || n === 0) {
    return n;
  }
  if (e === 1) {
    return n;
  }
  let min = Infinity;
  for (let i = 1; i <= n; i++) {
    const res = Math.max(superEggDrop(e - 1, i - 1, cache), superEggDrop(e, n - i, cache));
    if (res < min) {
      min = res;
    }
  }
  cache[e][n] = min + 1;
  return min + 1;
};


console.log(superEggDrop(3, 14));
console.log(superEggDrop(3, 15));

