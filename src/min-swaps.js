// https://leetcode.com/problems/couples-holding-hands/description/

const isFine = arr => {
  for (let i = 0; i < arr.length; i += 2) {
    const a = arr[i];
    const b = arr[i + 1];
    if (Math.abs(a - b) === 1 && Math.floor(a / 2) === Math.floor(b / 2)) {
      continue;
    }
    return false;
  }
  return true;
};

const swap = (arr, i, j) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

const minSwaps = (arr, i = 0, j = 1) => {
  if (i >= arr.length || j >= arr.length) {
    return Infinity;
  }
  if (isFine(arr)) {
    return 0;
  }
  swap(arr, i, j);
  const a = 1 + minSwaps(arr, i + 1, j + 1);
  swap(arr, i, j);
  const b = minSwaps(arr, i + 1, j + 1);
  swap(arr, i, j);
  const c = 1 + minSwaps(arr, i, j + 1);
  swap(arr, i, j);
  const d = minSwaps(arr, i, j + 1);
  return Math.min.apply(Math, [a, b, c, d]);
};

console.log(minSwaps([0, 2, 1, 3]));
console.log(minSwaps([2, 0, 4, 3, 5, 1]));

