// https://www.geeksforgeeks.org/maximum-absolute-difference-between-sum-of-two-contiguous-sub-arrays/

const max = a => {
  let glob = -Infinity;
  let loc = -Infinity;
  for (let i = 0; i < a.length; i += 1) {
    loc = Math.max(loc + a[i], a[i]);
    glob = Math.max(glob, loc);
  }
  return glob;
};

const min = a => {
  let glob = Infinity;
  let loc = Infinity;
  for (let i = 0; i < a.length; i += 1) {
    loc = Math.min(loc + a[i], a[i]);
    glob = Math.min(glob, loc);
  }
  return glob;
};


const maxAbsDiff = a => {
  let largest = -Infinity;
  for (let i = 1; i < a.length - 1; i += 1) {
    const smallLeft = min(a.slice(0, i));
    const smallRight = min(a.slice(i, a.length));
    const bigLeft = max(a.slice(0, i));
    const bigRight = max(a.slice(i, a.length));
    largest = Math.max(largest, Math.abs(smallLeft - bigRight), Math.abs(smallRight - bigLeft));
  }
  return largest;
};

console.log(maxAbsDiff([-2, -3, 4, -1, -2, 1, 5, -3]));
console.log(maxAbsDiff([2, -1, -2, 1, -4, 2, 8]));

