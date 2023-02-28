O(n^2)
const twoSum = (a, num) => {
  for (let i = 0; i < a.length - 1; i += 1) {
    for (let j = i + 1; j < a.length; j += 1) {
      if (a[i] + a[j] === num) {
        return [a[i], a[j]];
      }
    }
  }
  return null;
};

const a = [1, -3, 4, 2, 9, -3, -2];

console.log(twoSum(a, 0));
console.log(twoSum(a, 1));
console.log(twoSum(a, 2));
console.log(twoSum(a, 5));
console.log(twoSum(a, 6));
console.log(twoSum(a, 7));
console.log(twoSum(a, 8));

O(n)
var twoSum = function(nums, target) {
    let map = new Map();
    for(i = 0; i<nums.length; i ++){
        let num1 = nums[i];
        let num2 = target - num1;
        if(map.has(num2)){
            return [i, map.get(num2)]
        }
        map.set(num1, i)
    }
};

