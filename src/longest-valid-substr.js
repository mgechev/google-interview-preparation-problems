// https://www.geeksforgeeks.org/length-of-the-longest-valid-substring/

const valid = s => {
  let n = 0;
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === ')') {
      n -= 1;
    } else {
      n += 1;
    }
    if (n < 0) {
      return false;
    }
  }
  return n === 0;
};

// Naive - O(n^3)
const longestValidSubstr = s => {
  let max = 0;
  for (let i = 0; i < s.length - 1; i += 1) {
    for (let j = i + 1; j < s.length + 1; j += 1) {
      if (valid(s.substring(i, j))) {
        max = Math.max(max, s.substring(i, j).length);
      }
    }
  }
  return max;
};

const longestEfficient = s => {
  let a = [0];
  let fst = {};
  let max = 0;
  fst[0] = -1;
  for (let i = 0; i < s.length; i += 1) {
    const v = a[i] + (s[i] === '(' ? 1 : - 1);
    a.push(v);
    if (fst[v] !== undefined) {
      max = Math.max(max, i - fst[v]);
    } else {
      fst[v] = i;
    }
  }
  return max;
};

console.log(longestValidSubstr('()(()))))'));
console.log(longestEfficient('()(()))))'));
console.log(longestValidSubstr(')()())'));
console.log(longestEfficient(')()())'));
console.log(longestValidSubstr('((()'));
console.log(longestEfficient('((()'));
console.log(longestEfficient('))((((((((((((((((('));

