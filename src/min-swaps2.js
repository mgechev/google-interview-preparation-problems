// https://www.geeksforgeeks.org/minimum-number-of-swaps-required-for-arranging-pairs-adjacent-to-each-other/

const pairs = {
  1: 3,
  3: 1,
  2: 6,
  6: 2,
  4: 5,
  5: 4
};

const arr = [3, 5, 6, 4, 1, 2];

const adjusted = (p, a) => {
  for (let i = 0; i < a.length - 1; i += 2) {
    if (p[a[i]] !== a[i + 1] && p[a[i + 1]] !== a[i]) {
      return false;
    }
  }
  return true;
};

const swap = (a, i, j) => {
  const tmp = a[i];
  a[i] = a[j];
  a[j] = tmp;
};

const minSwaps = (p, a, i = 0, j = 1) => {
  const r = adjusted(p, a);
  if (r) {
    return 0;
  }
  if (i >= j || i >= a.length || j >= a.length) {
    return Infinity;
  }
  swap(a, i, j);
  const res = [];
  res.push(1 + minSwaps(p, a, i + 1, j));
  res.push(1 + minSwaps(p, a, i, j + 1));
  swap(a, i, j);
  res.push(minSwaps(p, a, i + 1, j));
  res.push(minSwaps(p, a, i, j + 1));
  return Math.min.apply(Math, res);
};

const minSwapsEfficient = (p, a, i = 0, j = 1) => {
  if (i >= a.length - 1) {
    return 0;
  }
  if (j >= a.length) {
    return Infinity;
  }
  if (p[a[i]] === a[i + 1] || p[a[i + 1]] === a[i]) {
    return minSwapsEfficient(p, a, i + 2, i + 3);
  }
  const res = [];
  swap(a, i + 1, j);
  res.push(1 + minSwapsEfficient(p, a, i, j + 1));
  swap(a, i + 1, j);
  res.push(minSwapsEfficient(p, a, i, j + 1));
  return Math.min.apply(Math, res);
};

console.log(minSwaps(pairs, arr));
console.log(minSwapsEfficient(pairs, arr));

