const mergeOverlapping = intervals => {
  const inter = intervals.sort((a, b) => a[1] - b[1]);
  console.log(inter);
  for (let i = 0; i < inter.length - 1; i += 1) {
    let k = i + 1;
    while (k < inter.length) {
      if (inter[i][1] >= inter[k][0]) {
        inter[i] = [Math.min(inter[i][0], inter[k][0]), Math.max(inter[i][1], inter[k][1])];
        inter.splice(k, 1);
      } else {
        k += 1;
      }
    }
  }
  return inter;
};

const set = [[1, 5], [2, 3], [4, 6], [7, 8], [8, 10], [12, 15]];
console.log(mergeOverlapping(set));

