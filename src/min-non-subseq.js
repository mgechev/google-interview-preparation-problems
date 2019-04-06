// https://www.geeksforgeeks.org/shortest-uncommon-subsequence/

const s1 = 'babab';
const t1 = 'babba';

const s2 = 'abb';
const t2 = 'abab';

const minNonSeq = (s, t, si = s.length, ti = t.length) => {
  if (si === 0) {
    return Infinity;
  }
  if (ti === 0) {
    return 1;
  }
  let k = ti - 1;
  for (; k >= 0; k -= 1) {
    if (s[si - 1] === t[k]) {
      break;
    }
  }
  if (k === -1) {
    return 1;
  }
  return Math.min(minNonSeq(s, t, si - 1, ti), 1 + minNonSeq(s, t, si - 1, k));
};

console.log(minNonSeq(s1, t1));
console.log(minNonSeq(s2, t2));

