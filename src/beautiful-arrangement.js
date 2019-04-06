// https://leetcode.com/problems/beautiful-arrangement-ii/description/

const constructArray = (n, k) => {
  let res = [];
  if (k >= n) {
    throw new Error('Invalid');
  }
  for (let i = 1; i <= n; i += 1) {
    res.push(i);
  }
  if (k === 1) {
    return res;
  }
  let kth = k + 1;
  let r = Math.floor(k / 2);
  let idx = 1;
  let i = 0;
  while (r) {
    res.splice(idx, 0, kth);
    res.splice(kth + i, 1);
    i += 1;
    idx += 2;
    kth -= 1;
    r -= 1;
  }
  return res;
};

console.log(constructArray(10, 8));
console.log(constructArray(3, 2));
console.log(constructArray(92, 80));

