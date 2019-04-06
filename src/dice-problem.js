/*
Given n dice each with m faces, numbered from 1 to m, find the number of ways to get sum X. X is the summation of values on each face when all the dice are thrown.
 */

const cache = {};
const diceSum = (m, n, x) => {
  if (cache[n] && cache[n][x]) {
    return cache[n][x];
  }
  cache[n] = cache[n] || {};
  if (x === 0 && n === 0) {
    cache[n][x] = 1;
    return 1;
  }
  if (x === 0 || n === 0) {
    cache[n][x] = 0;
    return 0;
  }
  let total = 0;
  for (let i = 1; i <= m && x - i >= 0; i += 1) {
    total += diceSum(m, n - 1, x - i);
  }
  cache[n][x] = total;
  return total;
};

const diceSumIter = (m, n, x) => {
  const memo = [];
  for (let i = 0; i <= n; i += 1) {
    memo[i] = [];
    for (let j = 0; j <= x; j += 1) {
      memo[i][j] = 0;
    }
  }
  for (let i = 1; i <= m && i < x; i += 1) {
    memo[1][i] = 1;
  }
  for (let i = 2; i <= n; i += 1) {
    for (let j = 1; j <= x; j += 1) {
      for (let k = 1; k <= m && k <= j; k += 1) {
        memo[i][j] += memo[i - 1][j - k];
      }
    }
  }
  return memo[n][x];
};

//console.log(diceSum(4, 2, 1));
//console.log(diceSum(15, 10, 100));
console.log(diceSum(3, 6, 8));
console.log(diceSumIter(3, 6, 8));
//console.log(diceSum(4, 3, 5));

