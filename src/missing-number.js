// https://leetcode.com/problems/missing-number/description/

const missingNumber = a => a.reduce((a, c, i) => a^c^i, a.length);

console.log(missingNumber([1, 0, 3]));

