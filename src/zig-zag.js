// https://leetcode.com/problems/zigzag-conversion/description/

const s = 'PAYPALISHIRING';

const zigZag = (s, r) => {
  let i = 0;
  let mtx = [];
  let col = 0;
  while (i < s.length) {
    for (let row = 0; row < r && i < s.length; i++, row++) {
      mtx[row] = mtx[row] || [];
      mtx[row][col] = s[i];
    }
    col += 1;
    for (let row = r - 2; row >= 1 && i < s.length; row--, i++) {
      mtx[row][col] = s[i];
    }
    col += 1;
  }
  let res = '';
  for (let i = 0; i < mtx.length; i += 1) {
    for (let j = 0; j < mtx[i].length; j += 1) {
      if (mtx[i][j] !== undefined) {
        res += mtx[i][j];
      }
    }
  }
  return res;
};

console.log(zigZag(s, 4));

