// https://www.careercup.com/question?id=5858156613730304

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pairs = (arr, t) => {
  const result = [];
  for (let i = 0; i < arr.length - 1; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i] + arr[j] < t) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  return result;
};

const pairsLinear = (arr, t) => {
  const nums = [];
  const smaller = [];
  const sorted = [];
  for (let i = 0; i < arr.length; i += 1) {
    nums[arr[i]] = true;
  }
  let s = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== undefined) {
      s += 1;
    }
    smaller[i] = s;
  }
  const result = [];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    if (arr[i] === undefined) {
      continue;
    }
    const d = t - arr[i];
    if (d > 0 && smaller[d] > 0) {
      for (let j = Math.min(d, arr[i]) - 2; j >= 0; j -= 1) {
        if (arr[j] !== undefined) {
          result.push([arr[j], arr[i]])
        }
      }
    }
  }
  return result;
};

console.log(pairs(arr, 6));
console.log(pairsLinear(arr, 6));
