const sum = arr => arr.reduce((c, e) => c + e, 0);

const minSubsetDiffHelper = (a1, a2, arr) => {
  if (!arr.length) {
    return Math.abs(a1.sum - a2.sum);
  }
  const el = arr.pop();
  a1.sum = a1.sum || 0;
  a2.sum = a2.sum || 0;
  a1.push(el);
  a1.sum += el;
  const a1Sum = minSubsetDiffHelper(a1, a2, arr);
  a1.pop();
  a1.sum -= el;
  a2.push(el);
  a2.sum += el;
  const a2Sum = minSubsetDiffHelper(a1, a2, arr);
  arr.push(el);
  a2.sum -= el;
  return Math.min(a1Sum, a2Sum);
};

const minSubsetDiff = arr => {
  return minSubsetDiffHelper([], [], arr);
};

console.log(minSubsetDiff([10, 20, 15, 5, 25]));

