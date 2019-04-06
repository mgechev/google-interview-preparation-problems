const minPathCostHelper = (matrix, current, visited, cache) => {
  const [x, y] = current;
  if (x < 0 || x >= matrix.length || y < 0 || y >= matrix[x].length || visited[x][y]) {
    return Infinity;
  }
  if (cache[x][y] !== undefined) {
    return cache[x][y];
  }
  if (x === matrix.length - 1 && y === matrix[x].length - 1) {
    return matrix[x][y];
  }
  visited[x][y] = true;
  const a1 = minPathCostHelper(matrix, [x + 1, y], visited, cache);
  const a2 = minPathCostHelper(matrix, [x - 1, y], visited, cache);
  const a3 = minPathCostHelper(matrix, [x, y + 1], visited, cache);
  const a4 = minPathCostHelper(matrix, [x, y - 1], visited, cache);
  visited[x][y] = false;
  const result = matrix[x][y] + Math.min(a1, a2, a3, a4);
  cache[x][y] = result;
  return result;
};

const minPathCost = matrix => {
  var visited = [];
  var cache = [];
  for (let i = 0; i < matrix.length; i += 1) {
    visited[i] = [];
    cache[i] = [];
    for (let j = 0; j < matrix[i].length; j += 1) {
      visited[i][j] = false;
      cache[i][j] = undefined;
    }
  }
  return minPathCostHelper(matrix, [0, 0], visited, cache);
};

const matrix =
[[4, 7, 8, 6, 4],
 [6, 7, 3, 9, 2],
 [3, 8, 1, 2, 4],
 [7, 1, 7, 3, 18],
 [2, 9, 8, 9, 3]];

console.log(minPathCost(matrix));

