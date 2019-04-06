const insertionSort = arr => {
  for (let i = 0; i < arr.length - 1; i += 1) {
    let j = i + 1;
    let item = arr[j];
    while (j >= 0 && item < arr[j - 1]) {
      arr[j] = arr[j - 1];
      j -= 1;
    }
    arr[j] = item;
  }
  return arr;
};

console.log(insertionSort([4, 2, 1, 6, 4, 2, 7, 101, -1]));
