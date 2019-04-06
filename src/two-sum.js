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

