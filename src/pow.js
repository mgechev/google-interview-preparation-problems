const myPow = (x, n) => {
  if (x === 1 || x === -1) return n % 2 ? x : 1;
  if (n === 0) return 1;
  if (n === 1) return x;
  let res = 1;
  let total = 0;
  while (total < Math.abs(n) && res !== 0 && isFinite(res)) {
    if (n < 0) {
      res *= 1 / x;
    } else {
      res *= x;
    }
    total++;
  }
  return parseFloat(res.toFixed(10));
};


console.log(myPow(2.00000, 10));
console.log(myPow(2.10000, 3));
console.log(myPow(2.00000, -2));
console.log(myPow(0.00001, 2147483647));
console.log(myPow(-1, 2147483647));

