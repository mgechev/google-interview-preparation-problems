// https://leetcode.com/problems/license-key-formatting/description/

const licenseKeyFormatting = (S, K) => {
  S = S.split('-').join('').toUpperCase();
  let res = '';
  for (let i = S.length - 1; i >= 0; i -= K) {
    const tmp = S.substring(Math.max(0, i - K + 1), i + 1);
    if (res === '') {
      res = tmp;
    } else {
      res = tmp + '-' + res;
    }
  }
  if (res.startsWith('-')) {
    res = res.substring(1, res.length);
  }
  return res;
}

console.log(licenseKeyFormatting('5F3Z-2e-9-w', 4));
console.log(licenseKeyFormatting('2-5g-3-J', 2));

