const swap = (a, i, j) => {
  const t = a[i];
  a[i] = a[j];
  a[j] = t;
};

const permutations = (a, s = 0, res = []) => {
  if (s >= a.length) {
    res.push(a.slice());
    return;
  }
  for (let i = s; i < a.length; i += 1) {
    swap(a, s, i);
    permutations(a, s + 1, res);
    swap(a, s, i);
  }
  return res;
};

console.log(permutations([1, 2, 3]));

