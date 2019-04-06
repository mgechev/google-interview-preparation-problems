const subsetsWith = (n, set, res, c = [], idx = 0, total = n) => {
  if (n === 0) { 
    if (c.length === total) {
      res.push(c.slice());
    }
    return;
  }
  if (idx >= set.length) return;
  c.push(set[idx]);
  subsetsWith(n - 1, set, res, c, idx + 1, total);
  c.pop();
  subsetsWith(n, set, res, c, idx + 1, total);
};

const subsets = n => {
  const res = [[]];
  for (let i = 1; i <= n.length; i++) {
    subsetsWith(i, n, res);
  }
  return res;
};

console.log(subsets([1, 2, 3]));

