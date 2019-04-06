// https://www.geeksforgeeks.org/inplace-rotate-square-matrix-by-90-degrees/

const m1 = [[1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]];

const m2 = [[1,  2,  3,  4],
            [5,  6,  7,  8],
            [9,  10, 11, 12],
            [13, 14, 15, 16]];


const rotate = m => {
  const o = Math.floor(m.length / 2);
  for (let d = 0; d < o; d += 1) {
    for (let i = d; i < m.length - d - 1; i += 1) {
      const a = m[d][d + i];
      const b = m[m.length - 1 - d - i][d];
      const c = m[m.length - 1 - d][m.length - 1 - d - i];
      const x = m[d + i][m.length - 1 - d];
      m[m.length - 1 - d - i][d] = a;
      m[m.length - 1 - d][m.length - 1 - d - i] = b;
      m[d + i][m.length - 1 - d] = c;
      m[d][d + i] = x;
    }
  }
  return m;
};

const format = m => m.map(r => r.join('\t')).join('\n');

console.log(format(rotate(m1)));
console.log();
console.log(format(rotate(m2)));

