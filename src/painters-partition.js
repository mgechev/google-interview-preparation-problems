const sum = (arr, i, j) => {
  let res = 0;
  while (i < j) {
    res += arr[i];
    i += 1;
  }
  return res;
};

const minSplit = (arr, k, min = k - 1, max = arr.length) => {
  if (min === 0) {
    return sum(arr, 0, max);
  }
  if (k === 0) {
    return 0;
  }
  if (min === 0 && k !== 1) {
    return Infinity;
  }
  let minV = Infinity;
  for (let i = min; i < max; i += 1) {
    const current = sum(arr, i, max);
    const prev = minSplit(arr, k - 1, k - 2, i);
    const s = Math.max(current, prev);
    if (minV > s) {
      minV = s;
    }
  }
  return minV;
};

console.log(minSplit([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
