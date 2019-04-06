// https://leetcode.com/problems/perfect-squares/description/

const numSquares = n => {
  if (n <= 0) return 0;
  const c = [0];
  for (let i = 1; i <= n; i += 1) {
    c[i] = Infinity;
  }
  for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j * j <= i; j += 1) {
      c[i] = Math.min(c[i], c[i - (j * j)] + 1);
    }
  }
  return c[n];
};

const numSquares2 = (n, c = {}) => {
  if (c[n] !== undefined) return c[n];
  if (n === 1) return 1;
  if (n < 0) return Infinity;
  if (n === 0) return 0;
  let min = Infinity;
  for (let i = 1; i * i <= n; i += 1) {
    min = Math.min(1 + numSquares2(n - (i * i), c), min);
  }
  c[n] = min;
  return min;
};

console.log(numSquares(32));
console.log(numSquares(1));
console.log(numSquares(2));
console.log(numSquares(46));

console.log(numSquares2(32));
console.log(numSquares2(1));
console.log(numSquares2(2));
console.log(numSquares2(46));

