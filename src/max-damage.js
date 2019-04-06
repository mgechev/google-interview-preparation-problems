// https://leetcode.com/problems/bomb-enemy/

const countEnemies = (g, i, j) => {
  let t = 0;
  let top = i;
  let left = j;
  while (top >= 0 && g[top][j] !== 'W') {
    if (g[top][j] === 'E') {
      t += 1;
    }
    top -= 1;
  }
  top = i;
  while (top < g.length && g[top][j] !== 'W') {
    if (g[top][j] === 'E') {
      t += 1;
    }
    top += 1;
  }
  while (left >= 0 && g[i][left] !== 'W') {
    if (g[i][left] === 'E') {
      t += 1;
    }
    left -= 1;
  }
  left = j;
  while (left < g[0].length && g[i][left] !== 'W') {
    if (g[i][left] === 'E') {
      t += 1;
    }
    left += 1;
  }
  return t;
}

const maxKilledEnemies = g => {
  let max = 0;
  for (let i = 0; i < g.length; i += 1) {
    for (let j = 0; j < g[i].length; j += 1) {
      max = Math.max(g[i][j] === '0' ? countEnemies(g, i, j) : 0, max);
    }
  }
  return max;
}

const m = [['0', 'E', '0', '0'],
           ['E', '0', 'W', 'E'],
           ['0', 'E', '0', '0']];

console.log(maxKilledEnemies(m));

