// https://leetcode.com/problems/first-missing-positive/description/

const swap = (a, i, j) => {
  const t = a[i];
  a[i] = a[j];
  a[j] = t;
};

const firstMissingPositive = a => {
  for (let i = a.length - 1; i > 0; i -= 1) {
    while (a[i] > 0 && a[i] <= a.length && a[a[i] - 1] !== a[i]) {
      swap(a, i, a[i] - 1);
    }
  }
  let min = 1;
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] === min) {
      min += 1;
    }
  }
  return min;
};

console.log(firstMissingPositive([2,1,3,4,4,3,1,1]));

//console.log(firstMissingPositive([1, 2, 3, 4]));
//console.log(firstMissingPositive([7, 8, 9, 11, 12]));
//console.log(firstMissingPositive([3, 4, -1, 1]));
//console.log(firstMissingPositive([1, 2, 0]));
//console.log(firstMissingPositive([0, 1, 2]));

//console.log(firstMissingPositive([-1, 4, 2, 1, 9, 10]));

//console.log(firstMissingPositive([1,2,2,1,3,1,0,4,0]));

