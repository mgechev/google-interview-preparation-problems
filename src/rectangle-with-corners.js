// https://www.geeksforgeeks.org/find-rectangle-binary-matrix-corners-1/

const matrix = [[1, 0, 0, 1, 0],
                [0, 0, 1, 0, 1],
                [0, 0, 0, 1, 0],
                [1, 0, 1, 0, 1]];

const check = (m, x, y) => {
  if (m[x][y] === 0) {
    return false;
  }
  for (let i = x + 1; i < m.length; i += 1) {
    if (m[i][y] === 1) {
      for (let j = y + 1; j < m[i].length; j += 1) {
        if (m[i][j] === 1 && m[x][j] === 1) {
          return true;
        }
      }
    }
  }
  return false;
};

const exists = m => {
  for (let i = 0; i < m.length - 1; i += 1) {
    for (let j = 0; j < m[i].length - 1; j += 1) {
      if (check(m, i, j)) {
        return true;
      }
    }
  }
  return false;
};

const existsEfficient = m => {
  const map = {};
  for (let i = 0; i < m.length; i += 1) {
    let idx = [];
    for (let j = 0; j < m[i].length; j += 1) {
      if (m[i][j] === 1) {
        idx.push(j);
      }
    }
    for (let k = 0; k < idx.length - 1; k += 1) {
      for (let n = k + 1; n < idx.length; n += 1) {
        map[idx[k]] = map[idx[k]] || {};
        if (map[idx[k]] === idx[n]) {
          return true;
        }
        map[idx[k]] = idx[n];
      }
    }
  }
  return false;
};

console.log(exists(matrix));
console.log(existsEfficient(matrix));
