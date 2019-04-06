// https://leetcode.com/problems/counting-bits/description/

const count = n => {
  let total = 0;
  while (n) {
    n = n & (n - 1);
    total++;
  }
  return total;
};

const countBits = num => {
  let total = [];
  for (let i = 0; i <= num; i += 1) {
    total.push(count(i));
  }
  return total;
};

console.log(countBits(5));

