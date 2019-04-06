// https://leetcode.com/problems/maximum-subarray/description/

const maxSubArray = n => {
  if (!n.length) return 0;
  let max = n[0];
  let sofar = n[0]
  let maxTotal = 0;
  let total = 0;
  for (let i = 1; i < n.length; i++) {
    if (sofar + n[i] < n[i]) {
      total = 1;
      sofar = n[i];
    } else {
      total += 1;
      sofar += n[i];
    }
    if (max < sofar) {
      maxTotal = total;
      max = sofar;
    }
  }
  return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([1]));

