// https://leetcode.com/problems/permutations/description/

const swap = (a, i, j) => {
  const tmp = a[i];
  a[i] = a[j];
  a[j] = tmp;
};

const permute = (n, start = 0, res = []) => {
  if (start >= n.length) {
    res.push(n.slice());
    return res;
  }
  for (let i = start; i < n.length; i++) {
    swap(n, start, i);
    permute(n, start + 1, res);
    swap(n, start, i);
  }
  return res;
};

console.log(permute([1, 2, 3]));
