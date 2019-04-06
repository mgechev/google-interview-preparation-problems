const maze = [[1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
              [1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
              [1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
              [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
              [1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
              [1, 0, 1, 1, 1, 1, 0, 1, 0, 0],
              [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
              [1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
              [1, 1, 0, 0, 0, 0, 1, 0, 0, 1]];

const shortestPath = (m, start, end) => {
  const q = [start];
  q[0].dist = 0;
  const visited = {};
  const parent = [];
  for (let i = 0; i < m.length; i += 1) {
    visited[i] = [];
    parent[i] = [];
    for (let j = 0; j < m[i].length; j += 1) {
      visited[i][j] = false;
    }
  }
  while (q.length) {
    const c = q.shift();
    if (c[0] === end[0] && c[1] === end[1]) {
      return c.dist;
    }
    if (c[0] + 1 < m.length && m[c[0] + 1][c[1]] && !visited[c[0] + 1][c[1]]) {
      visited[c[0] + 1][c[1]] = true;
      q.push([c[0] + 1, c[1]]);
      q[q.length - 1].dist = c.dist + 1;
    }
    if (c[1] + 1 < m[c[0]].length && m[c[0]][c[1] + 1] && !visited[c[0]][c[1] + 1]) {
      visited[c[0]][c[1] + 1] = true;
      q.push([c[0], c[1] + 1]);
      q[q.length - 1].dist = c.dist + 1;
    }
    if (c[0] - 1 >= 0 && m[c[0] - 1][c[1]] && !visited[c[0] - 1][c[1]]) {
      visited[c[0] - 1][c[1]] = true;
      q.push([c[0] - 1, c[1]]);
      q[q.length - 1].dist = c.dist + 1;
    }
    if (c[1] - 1 >= 0 && m[c[0]][c[1] - 1] && !visited[c[0]][c[1] - 1]) {
      visited[c[0]][c[1] - 1] = true;
      q.push([c[0], c[1] - 1]);
      q[q.length - 1].dist = c.dist + 1;
    }
  }
  return -1;
};

console.log(shortestPath(maze, [0, 0], [3, 4]));

