const rod = (prices, len, memo = {}) => {
  if (memo[len] !== undefined) {
    return memo[len];
  }
  if (len === 0) {
    return 0;
  }
  if (len === 1) {
    return prices[1];
  }
  let maxLen = prices[len];
  for (let i = 1; i < len; i += 1) {
    maxLen = Math.max(maxLen, prices[i] + rod(prices, len - i, memo));
  }
  memo[len] = maxLen;
  return maxLen;
};

const prices = {
  1: 1, 2: 5, 3: 8, 4: 9, 5: 10,  6: 17,  7: 17,  8: 20
};

console.log(rod(prices, 8));

const prices2 = {
  1: 3, 2: 5, 3: 8, 4: 9, 5: 10,  6: 17,  7: 17,  8: 20
};

console.log(rod(prices2, 8));

