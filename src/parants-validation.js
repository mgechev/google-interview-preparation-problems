// https://leetcode.com/problems/valid-parentheses/description/

const correspondingClosing = {
  '(': ')',
  '[': ']',
  '{': '}'
};
const isValid = s => {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (correspondingClosing[s[i]]) {
      stack.push(s[i]);
    } else {
      if (correspondingClosing[stack.pop()] !== s[i]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

