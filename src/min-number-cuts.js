// https://www.geeksforgeeks.org/paper-cut-minimum-number-squares-set-2/

const minCuts = (sq, m = {}) => {
  m[sq[0]] = m[sq[0]] || [];
  if (m[sq[0]][sq[1]]) {
    return m[sq[0]][sq[1]];
  }
  if (sq[0] === 0 || sq[1] === 0) {
    return 0;
  }
  if (sq[0] === sq[1]) {
    return 1;
  }
  const min = Math.min(sq[0], sq[1]);
  let res = Infinity;
  for (let i = min; i > 0; i -= 1) {
    res = Math.min(res,
      1
      + minCuts([
        sq[0] - i,
        i
      ], m)
      + minCuts([
        sq[0],
        sq[1] - i
      ], m)
    );
  }
  m[sq[0]][sq[1]] = res;
  return res;
};

console.log(minCuts([36, 30]));
console.log(minCuts([4, 5]));
console.log(minCuts([5, 5]));
console.log(minCuts([5, 10]));
console.log(minCuts([5, 11]));
console.log(minCuts([29, 13]));

