// https://leetcode.com/problems/permutations-ii/description/

const swap = (a, i, j) => {
  const t = a[i];
  a[i] = a[j];
  a[j] = t;
};

const permuteUnique = (n, s = 0, res = [], set = new Set()) => {
  if (s >= n.length) {
    const ser = n.join('-');
    if (!set.has(ser)) {
      res.push(n.slice());
      set.add(ser);
    }
    return res;
  }
  for (let i = s; i < n.length; i++) {
    swap(n, s, i);
    permuteUnique(n, s + 1, res, set);
    swap(n, s, i);
  }
  return res;
};

//console.log(permuteUnique([1, 2, 3]));
console.log(permuteUnique([1, 1, 3, 3]));

