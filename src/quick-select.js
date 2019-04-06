const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const partition = (arr, min, max) => {
  let curSmaller = min + 1;
  let pivot = arr[min];
  for (let i = min + 1; i < max; i += 1) {
    if (arr[i] < pivot) {
      swap(arr, curSmaller, i);
      curSmaller += 1;
    }
  }
  curSmaller -= 1;
  swap(arr, curSmaller, min);
  return curSmaller;
};

const quickSelect = (arr, idx) => {
  let min = 0;
  let max = arr.length;

  while (min < max) {
    let pivotIdx = partition(arr, min, max);
    if (pivotIdx === idx) {
      return arr[pivotIdx];
    } else if (pivotIdx > idx) {
      max = pivotIdx;
    } else {
      min = pivotIdx + 1;
    }
  }

  return undefined;
};

console.log(quickSelect([1, 0, 2, 5, 4, 3, 6, 7, 8], 0));
console.log(quickSelect([1, 0, 2, 5, 4, 3, 6, 7, 8], 1));
console.log(quickSelect([1, 0, 2, 5, 4, 3, 6, 7, 8], 2));
console.log(quickSelect([1, 0, 2, 5, 4, 3, 6, 7, 8], 3));
console.log(quickSelect([1, 0, 2, 5, 4, 3, 6, 7, 8], 4));
console.log(quickSelect([1, 0, 2, 5, 4, 3, 6, 7, 8], 5));
console.log(quickSelect([1, 0, 2, 5, 4, 3, 6, 7, 8], 6));

