// https://leetcode.com/problems/longest-common-prefix/description/

const longestCommonPrefix = l => {
  if (l.length <= 0) return '';
  const min = l.reduce((a, c) => Math.min(a, c.length), Infinity);
  for (let i = min; i > 0; i--) {
    const prefix = l[0].substring(0, i);
    let miss = false;
    for (let j = 1; j < l.length && !miss; j++) {
      miss = !l[j].startsWith(prefix);
    }
    if (!miss) {
      return prefix;
    }
  }
  return '';
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));

