// https://www.geeksforgeeks.org/maximum-absolute-difference-between-sum-of-two-contiguous-sub-arrays/
// Use Kadane Algorithm to reduce the complexity to O(n)

const a = [-2, -3, 4, -1, -2, 1, 5, -3];

const sum = (a, i, j) => {
  let res = 0;
  while (i <= j) {
    res += a[i];
    i += 1;
  }
  return res;
};

const max = (a, mi, ma) => {
  if (mi + 1 === ma) {
    return a[mi];
  }
  let res = -Infinity;
  for (let i = mi; i < ma - 1; i += 1) {
    for (let j = i + 1; j < ma; j += 1) {
      res = Math.max(sum(a, i, j), res);
    }
  }
  return res;
};

const min = (a, mi, ma) => {
  if (mi + 1 === ma) {
    return a[mi];
  }
  let res = Infinity;
  for (let i = mi; i < ma - 1; i += 1) {
    for (let j = i + 1; j < ma; j += 1) {
      res = Math.min(sum(a, i, j), res);
    }
  }
  return res;
};

const maxAbsDiff = arr => {
  const maxLeft = [];
  const minLeft = [];
  const maxRight = [];
  const minRight = [];
  for (let i = 0; i <= arr.length - 1; i += 1) {
    maxLeft[i] = max(arr, 0, i + 1);
    minLeft[i] = min(arr, 0, i + 1);

    maxRight[i] = max(arr, i, arr.length);
    minRight[i] = min(arr, i, arr.length);
  }

  let res = -Infinity;
  for (let i = 1; i < arr.length - 1; i += 1) {
    res = Math.max(Math.abs(maxLeft[i] - minRight[i]), Math.abs(minLeft[i] - maxRight[i]), res);
  }

  return res;
};

console.log(maxAbsDiff(a));
console.log(maxAbsDiff([2, -1, -2, 1, -4, 2, 8]));

