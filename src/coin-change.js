const coinChange = (total, coins, s = 0) => {
  if (total < 0) {
    return 0;
  }
  if (total === 0) {
    return 1;
  }
  if (s >= coins.length) {
    return 0;
  }
  let res = 0;
  res += coinChange(total - coins[s], coins, s);
  res += coinChange(total, coins, s + 1);
  return res;
};

console.log(coinChange(2, [1, 1]));
console.log(coinChange(4, [1, 2, 3]));
console.log(coinChange(10, [2, 3, 5, 6]));

