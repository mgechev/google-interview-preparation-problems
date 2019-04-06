const key = c => `${c.x} - ${c.y}`;

let totalCalls = 0;
const longestPathHelper = (matrix, current, visited, last, path = []) => {
  totalCalls += 1;
  const { x, y } = current;
  if (x < 0 || x >= matrix.length ||
      y < 0 || y >= matrix[x].length) {
    return path;
  }
  const recurse = () => {
    let c = matrix[x][y];
    const a1 = longestPathHelper(matrix, { x: x + 1, y }, visited, c, []);
    const a2 = longestPathHelper(matrix, { x: x - 1, y }, visited, c, []);
    const a3 = longestPathHelper(matrix, { x, y: y + 1 }, visited, c, []);
    const a4 = longestPathHelper(matrix, { x, y: y - 1 }, visited, c, []);
    let max = a1;
    if (a2.length > a1.length) {
      max = a2;
    }
    if (a3.length > a2.length) {
      max = a3;
    }
    if (a4.length > a3.length) {
      max = a4;
    }
    return max;
  };
  if (!last || last + 1 === matrix[x][y]) {
    if (!last) {
      path.push(matrix[x][y]);
    }
    if (visited[key(current)] !== undefined) {
      return visited[key(current)];
    } else {
      const res = recurse();
      visited[key(current)] = [current].concat(res);
      return visited[key(current)];
    }
  } else {
    return path;
  }
};

const longestPath = matrix => {
  if (!matrix || !matrix.length) {
    return 0;
  }
  let longestSoFar = [];
  const visited = {};
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      const current = longestPathHelper(matrix, { x: i, y: j }, visited);
      if (current.length > longestSoFar.length) {
        longestSoFar = current;
      }
    }
  }
  longestSoFar.forEach(n => {
    const { x, y } = n;
    console.log(matrix[x][y]);
  });
  return longestSoFar;
};

const matrix =
[[10, 13, 14, 21, 23],
 [11, 9,  8,  7,  6],
 [12, 22, 17, 4,  5],
 [15, 24, 2,  3,  20],
 [16, 1,  18, 19, 25]];

const m2 =
[[1, 2, 3, 4, 5],
 [10, 9, 8, 7, 6],
 [11, 12, 13, 14, 15],
 [20, 19, 18, 17, 16],
 [21, 22, 23, 24, 25]];

const m3 =
[[6, 4, 5],
 [8, 1, 2],
 [9, 0, 3]];

console.log(longestPath(matrix));
//console.log(longestPath(m2));
//console.log(longestPath(m3));
console.log(totalCalls);
