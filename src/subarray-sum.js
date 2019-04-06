// https://leetcode.com/problems/subarray-sum-equals-k/description/

const subarraySum2 = (nums, k) => {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i];
    if (sum === k) {
      total++;
    }
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      if (sum === k) {
        total++;
      }
    }
  }
  return total;
};

const subarraySum = (nums, k) => {
  let map = {};
  let total = 0;
  let sum = 0;
  map[0] = 1;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map[sum - k] !== undefined) {
      total += map[sum - k];
    }
    map[sum] = (map[sum] || 0) + 1;
  }
  return total;
};

console.log(subarraySum([1, 1, 1], 2));
console.log(subarraySum([1, 2, 3], 3));
console.log(subarraySum([28, 54, 7, -70, 22, 65, -6], 100));
console.log(subarraySum([0, 0, 0], 0));
