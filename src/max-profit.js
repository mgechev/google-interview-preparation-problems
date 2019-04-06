// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

const maxProfit2 = s => {
  let max = 0;
  for (let i = 0; i < s.length - 1; i++) {
    for (let j = i + 1; j < s.length; j++) {
      max = Math.max(max, s[j] - s[i]);
    }
  }
  return max;
};

const maxProfit3 = s => {
  let min = 0;
  let max = 0;
  let res = s[max] - s[min];
  for (let i = 1; i < s.length; i++) {
    if (s[i] > s[max] || min >= max) {
      max = i;
    }
    if (s[i] < s[min]) {
      min = i;
    }
    if (max > min) {
      res = Math.max(res, s[max] - s[min]);
    }
  }
  return res;
};

const maxProfit = s => {
  let min = s[0];
  let res = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] < min) {
      min = s[i];
    }
    if (s[i] - min > res) {
      res = s[i] - min;
    }
  }
  return res;
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([1,6,7,0,7,4]));

