// https://leetcode.com/problems/trapping-rain-water/description/

const a = [3, 1, 2, 2, 4, 1, 2];
const b = [10, 1, 2, 2, 4, 1, 2];
const c = [10, 1, 3];
const d = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

const waterFlow = a => {
  if (a.length <= 2) {
    return 0;
  }
  let total = [];
  for (let i = 0; i < a.length - 2; i += 1) {
    let s = a[i];
    for (let j = i + 2; j < a.length; j += 1) {
      let e = a[j];
      for (let k = i + 1; k <= j; k += 1) {
        total[k] = total[k] || 0;
        total[k] = Math.max(total[k], Math.max(0, Math.min(s, e) - a[k]));
      }
    }
  }
  return total.reduce((a, c) => {
    c = c || 0;
    return a + c;
  }, 0);
};


const trapWater = a => {
  if (a.length <= 2) {
    return 0;
  }
  let left = 0;
  let right = 1;
  let total = [];
  while (left < a.length && right < a.length) {
    for (let i = left + 1; i < right; i += 1) {
      total[i] = total[i] || 0;
      total[i] = Math.max(total[i], Math.max(0, Math.min(a[left], a[right]) - a[i]));
    }
    if (a[right] > a[left]) {
      left = right;
    }
    right += 1;
  }
  return total.reduce((a, c) => {
    c = c || 0;
    return a + c;
  }, 0);
};

console.log(waterFlow(a));
console.log(waterFlow(b));
console.log(waterFlow(c));
console.log(waterFlow(d));
console.log();
console.log(trapWater(a));
console.log(trapWater(b));
console.log(trapWater(c));
console.log(trapWater(d));

