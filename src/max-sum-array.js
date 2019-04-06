const sum = arr => arr.reduce((a, c) => a + c, 0);

const maxSubArray = (arr, k) => {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (j - i >= k) {
        max = Math.max(sum(arr.slice(i, j)), max);
      }
    }
  }
  return max;
};

const maxSubArray3 = (arr, k) => {
  let maxHere = arr[0];
  let maxTotal = arr[0];
  let start = 0;
  let end = 0;
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] > maxHere + arr[i]) {
      start = i;
      end = i;
      maxHere = arr[i];
    } else {
      end = i;
      maxHere = maxHere + arr[i];
    }
    if (maxHere > maxTotal && end - start >= k) {
      maxTotal = maxHere;
    }
  }
  return maxTotal;
};

//const maxSubArray2 = (arr, k) => {
//  
//};

console.log(maxSubArray3([6, -2, 1, -3], 2));

