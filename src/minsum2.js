const cache = [];

const minSum = (arr, n, m) => {
  if (n < 0 || m < 0) {
    return Infinity;
  }
  if (n === 0 && m === 0) {
    return arr[0][0];
  }
  return arr[n][m] + Math.min(minSum(arr, n - 1, m), minSum(arr, n, m - 1));
};

const matrix =
[[4, 7, 8, 6, 4],
 [6, 7, 3, 9, 2],
 [3, 8, 1, 2, 4],
 [7, 1, 7, 3, 18],
 [2, 9, 8, 9, 3]];

console.log(minSum(matrix, 4, 4));

