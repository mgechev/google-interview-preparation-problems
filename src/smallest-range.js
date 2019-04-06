// https://leetcode.com/problems/smallest-range/description/

const smallestRange = nums => {
  let min = Infinity;
  let max = -Infinity;
  let pos = [];
  let minAr = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i][0] < min) {
      min = nums[i][0];
      minAr = i;
    }
    max = Math.max(max, nums[i][0]);
    pos.push(0);
  }
  let best = [min, max];
  while (pos[minAr] < nums[minAr].length) {
    min = Infinity;
    for (let i = 0; i < pos.length; i += 1) {
      if (nums[i][pos[i]] < min) {
        minAr = i;
        min = nums[i][pos[i]];
      }
      max = Math.max(max, nums[i][pos[i]]);
    }
    if (max - min < best[1] - best[0]) {
      best = [min, max];
    }
    pos[minAr] += 1;
  }
  return best;
};

const input = [[4, 10, 15, 24, 26], [0, 9, 12, 20], [5, 18, 22, 30]];
console.log(smallestRange(input));

