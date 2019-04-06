const allowed = new Set(['(', ')', '[', ']', '{', '}']);

const dictionary = {
  '(': 1,
  ')': -1,
  '[': 1,
  ']': -1,
  '{': 1,
  '}': -1
};

const corresponding = {
  ')': '(',
  '}': '{',
  ']': '['
};

const opening = {
  '(': true,
  '{': true,
  '[': true
};

const balanced = str => {
  const stack = [];
  for (let i = 0; i < str.length; i += 1) {
    if (!allowed.has(str[i])) {
      throw new Error(`The string has character "${str[i]}" which is not allowed`);
    }
    if (opening[str[i]]) {
      stack.push(str[i]);
    } else {
      if (stack[stack.length - 1] !== corresponding[str[i]]) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
};

console.assert(balanced('[{]}') === false);
console.assert(balanced('[{}]') === true);
console.assert(balanced('([{}])') === true);
console.assert(balanced('[()[{{}}]]') === true);
