// https://leetcode.com/problems/container-with-most-water/description/

const maxArea2 = h => {
  let left = 0;
  let right = h.length - 1;
  let max = -Infinity;
  while (left < right) {
    max = Math.max(max, Math.min(h[left], h[right]) * (right - left));
    if (h[left] < h[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }
  return max;
};

const maxArea = h => {
  let max = -Infinity;
  for (let i = 0; i < h.length - 1; i += 1) {
    for (let j = i + 1; j < h.length; j += 1) {
      max = Math.max(max, Math.min(h[i], h[j]) * (j - i));
    }
  }
  return max;
};

console.log(maxArea2([1,8,6,2,5,4,8,3,7]));
console.log(maxArea2([1, 2, 1]));

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea([1, 2, 1]));

