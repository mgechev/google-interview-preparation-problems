// https://www.geeksforgeeks.org/meta-strings-check-two-strings-can-become-swap-one-string/

const metaStrings = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }
  let a = -1;
  let b = -1;
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] !== t[i]) {
      if (a === -1) {
        a = i;
      } else if (b === -1) {
        b = i;
      } else {
        return false;
      }
    }
  }
  return s[a] === t[b];
};

console.log(metaStrings('geeks', 'keegs'));
console.log(metaStrings('geeks', 'kesge'));

