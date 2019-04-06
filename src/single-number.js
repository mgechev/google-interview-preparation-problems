// https://leetcode.com/problems/single-number-ii/description/

const singleNumber2 = nums => {
  const count = {};
  for (let i = 0; i < nums.length; i += 1) {
    count[nums[i]] = count[nums[i]] || 0;
    count[nums[i]]++;
  }
  for (let i = 0; i < nums.length; i += 1) {
    if (count[nums[i]] === 1) {
      return nums[i];
    }
  }
  return -1;
};

const singleNumber = nums => {
  let res = 0;
  for (let i = 0; i < 32; i += 1) {
    let sum = 0;
    for (let j = 0; j < nums.length; j += 1) {
      if ((nums[j] >>> i) & 1 === 1) {
        sum++;
        sum %= 3;
      }
    }
    if (sum !== 0) {
      res |= sum << i;
    }
  }
  return res;
};

console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]));
