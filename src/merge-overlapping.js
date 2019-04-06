// https://www.geeksforgeeks.org/merging-intervals/

const intervals1 = [[6, 8], [1, 9], [2, 4], [4, 7]];
const intervals2 = [[1, 5], [2, 3], [4, 6], [7, 8], [8, 10], [12, 15]];
const intervals3 = [[6, 8], [1, 9], [2, 4], [4, 7]];

const merge = intr => {
  intr = intr.sort((a, b) => a[1] - b[1]);
  intr = intr.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < intr.length - 1; i += 1) {
    const c = intr[i];
    const n = intr[i + 1];
    if ((c[1] >= n[0] && c[1] <= n[1]) || (n[1] >= c[0] && n[1] <= c[1])) {
      intr.splice(i + 1, 1);
      intr[i] = [c[0], Math.max(n[1], c[1])];
      i -= 1;
    }
  }
  return intr;
};

console.log(merge(intervals1));
console.log(merge(intervals2));
console.log(merge(intervals3));

