const matrix = [
  [2, 4, 7, 8],
  [3, 5, 9, 10],
  [5, 6, 10, 11],
  [7, 7, 11, 13]
];

const getPairs = (max, n) => {
  const pairs = [];
  for (let i = 0; i <= n; i += 1) {
    if (i >= max || n - i >= max) {
      continue;
    }
    pairs.push([i, n - i]);
  }
  return pairs;
};

const getDisplacement = (d, n) => {
  let total = 0;
  for (let i = 0; i < n; i += 1) {
    const p = getPairs(d, i).length;
    if (p + total > n) {
      break;
    }
    total += getPairs(d, i).length;
  }
  console.log(n, total);
  return n - total;
};

const nthSmallest = (m, n) => {
  const pairs = getPairs(m.length, n - 1);
  const dis = getDisplacement(m.length, n - 1);
  const all = [];
  for (let i = 0; i < pairs.length; i += 1) {
    all.push(m[pairs[i][0]][pairs[i][1]]);
  }
  return all.sort((a, b) => a - b)[dis];
};

console.log(nthSmallest(matrix, 1));
console.log(nthSmallest(matrix, 2));
console.log(nthSmallest(matrix, 3));
console.log(nthSmallest(matrix, 4));
console.log(nthSmallest(matrix, 5));
console.log(nthSmallest(matrix, 6));
console.log(nthSmallest(matrix, 7));

