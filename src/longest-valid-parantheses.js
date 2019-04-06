const longestValidParentheses2 = s => {
  if (!s) return 0;
  const stack = [];
  let streak = 0;
  let maxStreak = 0;
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === '(') {
      let done = false;
      let open = 1;
      for (let j = i + 1; j < s.length && !done; j += 1) {
        if (s[j] === '(') {
          open++;
        } else {
          open--;
        }
        if (open < 0) {
          done = true;
          i = j;
        }
        if (open === 0) {
          maxStreak = Math.max(j - i + 1, maxStreak);
          i = j;
        }
      }
    }
  }
  if (maxStreak % 2 === 0) {
    return maxStreak;
  }
  return maxStreak - 1;
};

const longestValidParentheses = s => {

  const helper = (s, i, c) => {
    if (c[i] !== undefined) {
      return c[i];
    }
    if (i <= 0) {
      return 0;
    }
    if (s[i] === ')' && i > 0 && s[i - 1] === '(') {
      const res = helper(s, i - 2, c);
      c[i] = res + 2;
      return c[i];
    }
    if (s[i] === ')' && i > 1 && s[i - 1] === ')') {
      const lower = helper(s, i - 1, c);
      if (s[i - lower - 1] === '(') {
        c[i] = Math.max(2 + lower + helper(s, i - lower - 2, c), helper(s, i - 1, c));
        return c[i];
      }
      c[i] = 0;
      return c[i];
    }
    c[i] = 0;
    return c[i];
  };

  let max = 0;
  const cache = {};
  for (let i = s.length - 1; i >= 0; i -= 1) {
    max = Math.max(helper(s, i, cache), max);
  }
  return max;
};

//console.log(longestValidParentheses(')()())'));
//console.log(longestValidParentheses('))((((((((((((((((('));
//console.log(longestValidParentheses('(()'));
//console.log(longestValidParentheses(')'));
//console.log(longestValidParentheses('('));
//console.log(longestValidParentheses('()(()'));

console.log(longestValidParentheses2('(((()))'));
console.log(longestValidParentheses2(')((()))()'));
console.log(longestValidParentheses2(')()())()()('));
console.log('#');
console.log(longestValidParentheses(')())()'));
console.log(longestValidParentheses('(()()))'));

