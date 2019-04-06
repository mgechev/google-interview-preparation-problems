// https://www.geeksforgeeks.org/find-subarray-with-given-sum/

// Incorrect
const findSubArr = (a, n) => {
  let locMin = Infinity;
  let locStart = -1;
  for (let i = 0; i < a.length; i += 1) {
    if (locMin > n - a[i]) {
      locMin = n - a[i];
      locStart = i;
    } else {
      locMin -= a[i];
    }
    if (locMin === 0) {
      return [locStart, i];
    }
  }
  return null;
};

// Correct
const findSubArrProper = (a, n) => {
  let min = a[0];
  let s = 0;
  for (let i = 1; i <= a.length; i += 1) {
    while (min > n && s < i) {
      min -= a[s];
      s += 1;
    }
    if (min === n) {
      return [s, i];
    }
    if (i < a.length) {
      min += a[i];
    }
  }
  return null;
};

console.log(findSubArr([1, 4, 20, 3, 10, 5], 33));
console.log(findSubArr([1, 2, 3, 7, 5], 12));
console.log(findSubArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15));

console.log(findSubArrProper([1, 4, 20, 3, 10, 5], 33));
console.log(findSubArrProper([1, 2, 3, 7, 5], 12));
console.log(findSubArrProper([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15));


