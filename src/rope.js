const fh = (r, memo) => {
  if (r <= 1) {
    throw new Error('Cannot work with rope shorter than 2');
  }
  if (memo[r] !== undefined) {
    return memo[r];
  }
  if (r === 1 || r === 2) {
    return r;
  }
  let s = r;
  for (let i = 2; i <= r - 2; i += 1) {
    s = Math.max(f(i) * f(r - i), s);
  }
  memo[r] = s;
  return s;
};

const f = r => fh(r, {});

console.log(2, f(2));
console.log(3, f(3));
console.log(4, f(4));
console.log(5, f(5));
console.log(6, f(6));
console.log(7, f(7));
console.log(10, f(10));
