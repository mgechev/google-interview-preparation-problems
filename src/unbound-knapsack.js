// https://www.geeksforgeeks.org/unbounded-knapsack-repetition-items-allowed/

const v = [10, 40, 50, 70];
const w = [1, 3, 4, 5];
const W = 8;

const maxValue = (v, w, t, s = 0, m = {}) => {
  if (m[t] !== undefined) {
    return m[t];
  }
  if (t < 0) {
    return -Infinity;
  }
  if (t === 0) {
    return 0;
  }
  let maxVal = 0;
  for (let i = s; i < w.length; i += 1) {
    maxVal = Math.max(maxVal, v[i] + maxValue(v, w, t - w[i], i, m));
  }
  m[t] = maxVal;
  return maxVal;
};

console.log(maxValue(v, w, W));
console.log(maxValue([10, 30, 20], [5, 10, 15], 100));

