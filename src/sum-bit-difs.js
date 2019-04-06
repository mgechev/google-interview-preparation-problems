// https://www.geeksforgeeks.org/sum-of-bit-differences-among-all-pairs/

const arr = [1, 3, 5];

const bits = (a, b)=> {
  a = a.toString(2);
  b = b.toString(2);
  const max = Math.max(a.length, b.length);
  a = a.padStart(max, '0');
  b = b.padStart(max, '0');
  let res = 0;
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] !== b[i]) {
      res += 1;
    }
  }
  return res;
};

const sumBitDiffs = a => {
  let res = 0;
  for (let i = 0; i < a.length; i += 1) {
    for (let j = 0; j < a.length; j += 1) {
      res += bits(a[i], a[j]);
    }
  }
  return res;
};

const sumBitDifferences = (arr, n = arr.length) => {
  let ans = 0;
  for (let i = 0; i < 32; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if ((arr[j] & (1 << i)))
        count++;
    }
    ans += (count * (n - count) * 2);
  }
  return ans;
}

console.log(sumBitDiffs(arr));
console.log(sumBitDifferences(arr));

