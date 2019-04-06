// https://leetcode.com/problems/plus-one/description/

const plusOne = d => {
  let c = 0;
  for (let i = d.length - 1; i >= 0; i--) {
    const num = d[i] + c + (i === d.length - 1 ? 1 : 0);
    c = Math.floor(num / 10);
    const dg = num % 10;
    if (i !== 0 || num < 10) {
      d[i] = dg;
    } else {
      d[0] = dg;
      d.unshift(c);
    }
  }
  return d;
};

console.log(plusOne([1,2,3]));
console.log(plusOne([9,9,9]));

