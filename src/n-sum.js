const nsum = (a, n, s, i = 0, c = [], j = 0, sm = 0) => {
  if (j === n) {
    if (sm === s) {
      return c;
    }
    return null;
  }
  if (a.length - i < n - j) {
    return null;
  }
  for (let k = i; k < a.length; k += 1) {
    c[j] = a[k];
    const res = nsum(a, n, s, k + 1, c, j + 1, sm + c[j]);
    if (res !== null) {
      return res;
    }
  }
  return null;
};

const a = [1, -3, 4, 2, 9, 9, 9];

//console.log(nsum(a, 2, 0));
//console.log(nsum(a, 2, 1));
//console.log(nsum(a, 2, 2));
//console.log(nsum(a, 2, 5));
//console.log(nsum(a, 2, 6));
//console.log(nsum(a, 2, 7));
//console.log(nsum(a, 2, 8));
console.log(nsum(a, 3, 27));

