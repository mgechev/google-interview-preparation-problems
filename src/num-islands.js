// https://leetcode.com/problems/number-of-islands/description/
// 10:54

const numIslands = m => {
  const visited = [];
  const add = (i, j, stack) => {
    if (i < 0 || i >= m.length || j < 0 || j >= m[i].length || m[i][j] === '0') {
      return false;
    }
    if (visited[i] && visited[i][j]) {
      return false;
    }
    visited[i] = visited[i] || [];
    visited[i][j] = true;
    stack.push([i, j]);
    return true;
  };
  let total = 0;
  for (let i = 0; i < m.length; i += 1) {
    visited[i] = visited[i] || [];
    for (let j = 0; j < m[i].length; j += 1) {
      if (visited[i][j] || m[i][j] === '0') {
        continue;
      }
      const stack = [[i, j]];
      total += 1;
      while (stack.length) {
        const c = stack.pop();
        visited[c[0]] = visited[c[0]] || [];
        visited[c[0]][c[1]] = true;
        add(c[0], c[1] + 1, stack);
        add(c[0], c[1] - 1, stack);
        add(c[0] + 1, c[1], stack);
        add(c[0] - 1, c[1], stack);
      }
    }
  }
  return total;
};

const m1 = [['1', '1', '0', '0', '0'],
            ['1', '1', '0', '0', '0'],
            ['0', '0', '1', '0', '0'],
            ['0', '0', '0', '1', '1']]

const m2 = [['1', '1', '1', '1', '0'],
            ['1', '1', '0', '1', '0'],
            ['1', '1', '0', '0', '0'],
            ['0', '0', '0', '0', '0']];

console.log(numIslands(m1));
console.log(numIslands(m2));
