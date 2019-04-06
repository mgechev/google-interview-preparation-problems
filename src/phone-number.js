// https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/

const map = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z']
};

const letterCombinations = (digits, i = 0, c = [], res = []) => {
  if (!digits) {
    return [];
  }
  if (digits.length <= i) {
    res.push(c.slice().join(''));
    return;
  }
  const l = map[digits[i]];
  if (!l) {
    c[i] = digits[i];
  } else {
    for (let j = 0; j < l.length; j += 1) {
      c[i] = l[j];
      letterCombinations(digits, i + 1, c, res);
    }
  }
  return res;
}

console.log(letterCombinations('23'));

