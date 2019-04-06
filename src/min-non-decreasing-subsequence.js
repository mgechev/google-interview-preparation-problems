// https://www.geeksforgeeks.org/non-decreasing-subsequence-of-size-k-with-minimum-sum/

const minNonDecreasingSubsequence = (arr, k, i = 0, min = -Infinity, a = {}) => {
  a[k] = a[k] || {};
  a[k][i] = a[k][i] || {};
  if (a[k][i][min]) {
    return a[k][i][min];
  }
  if (k === 0) {
    return 0;
  }
  if (arr.length - i < k) {
    return Infinity;
  }
  let res;
  if (min > arr[i]) {
    res = minNonDecreasingSubsequence(arr, k, i + 1, min, a);
    a[k][i][min] = res;
    return res;
  }
  res = Math.min(
    arr[i] + minNonDecreasingSubsequence(arr, k - 1, i + 1, Math.max(arr[i], min), a),
    minNonDecreasingSubsequence(arr, k, i + 1, min, a),
  );
  a[k][i][min] = res;
  return res;
};

const arr = [58, 12, 11, 12, 82, 30, 20, 77, 16, 86, 23, 133, 13, 12346, 123, 123, 6, 57457, 957];

console.log(minNonDecreasingSubsequence(arr, 3));
console.log(minNonDecreasingSubsequence(arr, 8));

