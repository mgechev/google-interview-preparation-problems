// https://leetcode.com/problems/maximum-average-subarray-i/description/

const findMaxAverage = (nums, k) => {
  let sum = 0;
  let left = 0;
  let right = k;
  for (let i = 0; i < k; i += 1) {
    sum += nums[i];
  }
  let max = sum;
  for (let i = 1; i < nums.length - k + 1; i += 1) {
    left += 1;
    right += 1;
    sum -= nums[left - 1];
    sum += nums[right - 1];
    max = Math.max(sum, max);
  }
  return max / k;
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
console.log(findMaxAverage([0,1,1,3,3], 4));

