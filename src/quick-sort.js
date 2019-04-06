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

const quickSort = (arr, min = 0, max = arr.length) => {
  if (min < max) {
    let pivotIdx = partition(arr, min, max);
    quickSort(arr, min, pivotIdx);
    quickSort(arr, pivotIdx + 1, max);
    return arr;
  }
};

console.log(quickSort([1, 0, 2, 5, 4, 3, 6, 7, 8]));

