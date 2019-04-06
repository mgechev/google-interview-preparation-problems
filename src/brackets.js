const opening = {
  ')': '(',
  ']': '[',
  '}': '{'
};
const brackets = {
  '(': true,
  ')': true,
  '{': true,
  '}': true,
  '[': true,
  ']': true
};
const isBracket = c => !!brackets[c];
const isClosing = b => !!opening[b];

const balanced = str => {
  const stack = [];
  return str.split('').reduce((accum, c) => {
    if (!isBracket(c)) return accum;
    if (!isClosing(c)) {
      stack.push(c);
      return accum;
    } else {
      return accum && opening[c] === stack.pop();
    }
  }, true) && !stack.length;
};

console.assert(balanced('()'));
console.assert(balanced('()[]'));
console.assert(balanced('[()]'));
console.assert(!balanced('([)]'));
console.assert(balanced('{()[]}'));
console.assert(!balanced('{()[}]'));

// [(...)]
// [()]
