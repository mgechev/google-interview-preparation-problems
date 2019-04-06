const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const permutations = (arr, idx = 0) => {
  if (idx >= arr.length - 1) {
    console.log(arr);
    return;
  }
  for (let i = idx; i < arr.length; i += 1) {
    swap(arr, i, idx);
    permutations(arr, idx + 1);
    swap(arr, i, idx);
  }
};

permutations([1, 2, 3, 4]);
