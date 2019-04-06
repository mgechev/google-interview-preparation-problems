// https://leetcode.com/problems/valid-sudoku/description/

const s1 = [
  ['5','3','.','.','7','.','.','.','.'],
  ['6','.','.','1','9','5','.','.','.'],
  ['.','9','8','.','.','.','.','6','.'],
  ['8','.','.','.','6','.','.','.','3'],
  ['4','.','.','8','.','3','.','.','1'],
  ['7','.','.','.','2','.','.','.','6'],
  ['.','6','.','.','.','.','2','8','.'],
  ['.','.','.','4','1','9','.','.','5'],
  ['.','.','.','.','8','.','.','7','9']
];

const s2 = [
  ['8','3','.','.','7','.','.','.','.'],
  ['6','.','.','1','9','5','.','.','.'],
  ['.','9','8','.','.','.','.','6','.'],
  ['.','.','.','.','6','.','.','.','3'],
  ['4','.','.','8','.','3','.','.','1'],
  ['7','.','.','.','2','.','.','.','6'],
  ['.','6','.','.','.','.','2','8','.'],
  ['.','.','.','4','1','9','.','.','5'],
  ['.','.','.','.','8','.','.','7','9']
];

const validCols = s => {
  for (let i = 0; i < s[0].length; i++) {
    const seen = {};
    for (let j = 0; j < s.length; j++) {
      const v = s[j][i];
      if (v === '.') continue;
      if (seen[v]) return false;
      seen[v] = true;
    }
  }
  return true;
};

const validRows = s => {
  for (let i = 0; i < s.length; i++) {
    const seen = {};
    for (let j = 0; j < s[i].length; j++) {
      const v = s[i][j];
      if (v === '.') continue;
      if (seen[v]) return false;
      seen[v] = true;
    }
  }
  return true;
};

const validateTile = (s, rowStart, colStart) => {
  const seen = {};
  for (let i = rowStart; i < rowStart + 3; i++) {
    for (let j = colStart; j < colStart + 3; j++) {
      const v = s[i][j];
      if (v === '.') continue;
      if (seen[v]) return false;
      seen[v] = true;
    }
  }
  return true;
};

const validTiles = s => {
  const total = s.length / 3;
  for (let ii = 0; ii < total; ii++) {
    for (let jj = 0; jj < total; jj++) {
      if (!validateTile(s, ii * 3, jj * 3))
        return false;
    }
  }
  return true;
};

const isValidSudoku = s => validRows(s) && validCols(s) && validTiles(s);

console.assert(isValidSudoku(s1), 'first sudoku');
console.assert(!isValidSudoku(s2), 'second sudoku');

