// https://leetcode.com/problems/palindrome-number/description/

const isPalindrome = n => {
  if (n < 0) return false;
  const nums = [];
  while (n) {
    nums.push(n % 10);
    n = Math.floor(n / 10);
  }
  const mid = Math.floor(nums.length / 2);
  for (let i = 0; i < mid; i++) {
    if (nums[i] !== nums[nums.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(121));
console.log(isPalindrome(10));
console.log(isPalindrome(1));
