// https://www.geeksforgeeks.org/sort-array-swapping-special-element-allowed/

const Marker = 999;

const swap = (a, i, j) => {
  let t = a[i];
  a[i] = a[j];
  a[j] = t;
};

const sort = a => {
  let m = -1;
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] === Marker) {
      m = i;
      break;
    }
  }
  swap(a, m, 0);
  m = 0;
  let currentMin = -Infinity;
  let currentIdx = -1;
  while (m < a.length - 1) {
    let lastFound = undefined;
    for (let i = Math.max(m, 0); i < a.length; i += 1) {
      if (a[i] >= currentMin && (lastFound === undefined || a[i] <= lastFound)) {
        currentIdx = i;
        lastFound = a[i];
      }
    }
    swap(a, currentIdx, m);
    currentMin = a[m];
    m += 1;
  }
  return a;
};

console.log(sort([1, 5, 4, Marker, 3, 2]));
console.log(sort([1, 5, 4, 3, 2, 8, 7, Marker, 6]));
console.log(sort([1, 3, 4, 3, 2, 8, 7, Marker, 6]));

