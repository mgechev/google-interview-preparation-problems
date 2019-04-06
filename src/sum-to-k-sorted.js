const sumUp = (arr, k) => {
  let min = 0;
  let max = arr.length - 1;
  while (min < max) {
    const sum = arr[min] + arr[max];
    if (sum === k) {
      return true;
    } else if (sum > k) {
      max--;
    } else {
      min++;
    }
  }
  return false;
};

console.log(sumUp([1, 2, 3, 9], 8));
console.log(sumUp([1, 2, 4, 4], 8));
