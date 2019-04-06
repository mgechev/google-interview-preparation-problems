// https://leetcode.com/problems/max-consecutive-ones-ii/description/

const helper = (nums, i = 0, flip = false, c = {}) => {
  c[i] = c[i] || {};
  if (i === nums.length) return 0;
  if (nums[i] === 1) {
    c[i][flip] = 1 + helper(nums, i + 1, flip, c);
    return c[i][flip];
  }
  if (flip) {
    return 0;
  }
  c[i][flip] = 1 + helper(nums, i + 1, true, c);
  return c[i][flip];
};

const findMaxConsecutiveOnes = nums => {
  let max = 0;
  let lastone = false;
  for (let i = 0; i < nums.length; i += 1) {
    if (!lastone) {
      max = Math.max(max, helper(nums, i, false, {}));
      lastone = true;
    }
    lastone = lastone && nums[i] === 1;
  }
  return max;
};

console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0]));
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));

