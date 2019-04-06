// https://www.geeksforgeeks.org/allocate-minimum-number-pages/

const sum = (a, i, j) => {
  let res = 0;
  while (i < j) {
    res += a[i];
    i += 1;
  }
  return res;
};

const allocateMinPages = (books, s, max = books.length) => {
  if (s === 1) {
    return sum(books, 0, max);
  }
  let min = Infinity;
  for (let c = s - 1; c < max; c += 1) {
    const maxSum = Math.max(sum(books, c, max), allocateMinPages(books, s - 1, c));
    min = Math.min(min, maxSum);
  }
  return min;
};

console.log(allocateMinPages([12, 34, 67, 90], 2));
