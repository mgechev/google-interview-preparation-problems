// https://leetcode.com/problems/reverse-integer/description/

const reverse = n => {
  const negative = n < 0 ? -1 : 1;
  const d = [];
  n = Math.abs(n);
  while (n) {
    d.push(n % 10);
    n = Math.floor(n / 10);
  }
  const res = negative * d.reduce((a, c, i) => a + c * Math.pow(10, d.length - 1 - i), 0);
  if (res > Math.pow(2, 31) - 1) return 0;
  if (res < -Math.pow(2, 31) - 1) return 0;
  return res;
};

console.log(reverse(123));
console.log(reverse(223));
console.log(reverse(120));
console.log(reverse(-120));
console.log(reverse(1534236469));
console.log(reverse(-2147483648));
console.log(reverse(1563847412));

