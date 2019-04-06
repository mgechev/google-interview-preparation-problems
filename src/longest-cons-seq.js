// https://leetcode.com/problems/longest-consecutive-sequence/description/

const longestConsecutive = nums => {
  const union = (map, a, b) => {
    while (a !== map[a]) {
      a = map[a];
    }
    while (b !== map[b]) {
      b = map[b];
    }
    map[a] = b;
  };
  const map = {};
  for (let i = 0; i < nums.length; i += 1) {
    map[nums[i]] = nums[i];
  }
  for (let i = 0; i < nums.length; i += 1) {
    if (map[nums[i] - 1]) {
      union(map, nums[i] - 1, nums[i]);
    }
    if (map[nums[i] + 1]) {
      union(map, nums[i] + 1, nums[i]);
    }
  }
  for (let i = 0; i < nums.length; i += 1) {
    let a = nums[i];
    while (a !== map[a]) {
      a = map[a];
    }
    map[nums[i]] = a;
  }
  const total = {};
  let max = 0;
  let maxVal = 0;
  Object.keys(map).forEach(k => {
    const v = map[k];
    total[v] = total[v] || 0;
    total[v]++;
    if (total[v] > max) {
      max = total[v];
      maxVal = parseInt(v);
    }
  });
  return max;
};

//console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
//console.log(longestConsecutive([-1, 0]));
console.log(longestConsecutive([0, -1]));
//console.log(longestConsecutive([-1,1,2,0]));

