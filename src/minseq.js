/*

Give an array A of n integers where 1 <= a[i] <= K.
Find out the length of the shortest sequence that can be constructed out of numbers 1, 2, .. k that is NOT a subsequence of A.
eg. A = [4, 2, 1, 2, 3, 3, 2, 4, 1], K = 4
All single digits appears. Each of the 16 double digit sequences, (1,1), (1, 2), (1, 3), (1, 4), (2, 1), (2, 2) ... appears. Because (1, 1, 2) doesn't appear, return 3.

 */

const seq = (n, total) => {
  const res = [];
  const _seq = (pos, local) => {
    if (pos >= total) {
      res.push(local.slice());
      return;
    }
    for (let i = 1; i <= n; i += 1) {
      local[pos] = i;
      _seq(pos + 1, local);
    }
  };
  _seq(0, []);
  return res;
};

const isseq = (seqs, a) => {
  const seq = (s, a) => {
    let j = 0;
    for (let i = 0; i < a.length; i += 1) {
      if (a[i] === s[j]) {
        j += 1;
      }
      if (j >= s.length) {
        return true;
      }
    }
    return false;
  };

  for (let i = 0; i < seqs.length; i += 1) {
    if (!seq(seqs[i], a)) {
      return false;
    }
  }
  return true;
};

const minseq = (a, k) => {
  for (let i = 1; i < a.length; i += 1) {
    if (!isseq(seq(k, i), a)) {
      return i;
    }
  }
  return a.length;
};

console.log(minseq([1, 2, 3, 2, 1, 3], 3));
console.log(minseq([4, 2, 1, 2, 3, 3, 2, 4, 1], 4));

