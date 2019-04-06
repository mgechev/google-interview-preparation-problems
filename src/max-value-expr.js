const maxValueOfExpression = (arr, cache, max = arr.length - 1, current = 4, sofar = 0) => {
  if (current > max + 1) {
    return -Infinity;
  }
  if (current === 0) {
    return sofar;
  }
  if (cache[current][max] !== undefined) {
    return cache[current][max] + sofar;
  }
  let res = -Infinity;
  for (let i = max; i >= 0; i -= 1) {
    const el = current % 2 ? -arr[i] : arr[i];
    const c = maxValueOfExpression(arr, cache, i - 1, current - 1, sofar + el);
    if (c > res) {
      res = c;
    }
  }
  cache[current][max] = res - sofar;
  return res;
};

const cache = [[], [], [], [], []];

console.log(maxValueOfExpression([3, 9, 10, 1, 30, 40], cache));
