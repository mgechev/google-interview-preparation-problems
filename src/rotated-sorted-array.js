// https://leetcode.com/problems/search-in-rotated-sorted-array/description/

const search = (n, t) => {
  let left = 0;
  let right = n.length;
  while (left <= right && right >= 0 && left >= 0 && left < n.length) {
    const mid = Math.floor(left + (right - left) / 2);
    if (n[mid] === t) {
      return mid;
    }
    if (n[mid] > t && n[left] > t) {
      left += 1;
    } else if (n[mid] < t && n[right - 1] < t) {
      right -= 1;
    } else if (n[mid] > t) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

console.log(search([4,5,6,7,0,1,2], 3));
console.log(search([4,5,6,7,0,1,2], 0));
console.log(search([4,5,6,7,0,1,2], 4));
console.log(search([3, 0], 3));
console.log(search([1], 2));
console.log(search([3,5,1], 2));
console.log(search([2,1], 2));
console.log(search([7,8,1,2,3,4,5,6], 2));
