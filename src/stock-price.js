// https://www.interviewcake.com/question/java/stock-price

const stocks = [10, 7, 5, 8, 11, 9];

const compute = a => {
  if (a.length < 2) {
    return -1;
  }
  let min = a[0];
  let max = a[1];
  let minSoFar = min < max ? min : max;
  for (let i = 2; i < a.length; i += 1) {
    if (a[i] > max) {
      max = a[i];
      min = minSoFar;
    }
    minSoFar = Math.min(a[i], minSoFar);
  }
  return max - min;
};

console.log(compute(stocks));
