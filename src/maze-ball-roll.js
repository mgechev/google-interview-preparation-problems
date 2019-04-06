// https://leetcode.com/problems/the-maze/description/

const m1 = [[0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0],
            [1, 1, 0, 1, 1],
            [0, 0, 0, 0, 0]]

const m2 = [[0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0],
            [1, 1, 0, 1, 1],
            [0, 0, 0, 0, 0]]

const dir = d => d.join('');

const helper = (m, c, b, d, v) => {
  v[c[0]] = v[c[0]] || [];
  v[c[0]][c[1]] = v[c[0]][c[1]] || [];
  if (v[c[0]][c[1]][dir(d)]) {
    return false;
  }
  v[c[0]][c[1]][dir(d)] = 1;
  while (true) {
    let x = c[0] + d[0];
    let y = c[1] + d[1];
    if (x >= m.length || x < 0 ||
        y >= m[x].length || y < 0 ||
        m[x][y] === 1) {
      break;
    }
    c = [x, y];
  }
  if (c[0] === b[0] && c[1] === b[1]) {
    return true;
  }
  return canRoll(m, c, b, v);
};

const canRoll = (m, c, b, v = {}) => {
  return helper(m, c, b, [1, 0], v) || helper(m, c, b, [0, 1], v) ||
    helper(m, c, b, [0, -1], v) || helper(m, c, b, [-1, 0], v);
};

console.log(canRoll(m1, [0, 4], [4, 4]));
console.log(canRoll(m2, [0, 4], [3, 2]));

