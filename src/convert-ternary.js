// https://practice.geeksforgeeks.org/problems/convert-ternary-expression-to-binary-tree/1

class Node {
  constructor(d, l, r) {
    this.data = d;
    this.left = l;
    this.right = r;
  }
}

const parse = (str, s = 0) => {
  if (s >= str.length) {
    throw new Error('Invalid expression');
  }
  let lE = s;
  while (/[a-zA-Z]/.test(str[lE]) && lE < str.length) lE++;
  const d = str.substring(s, lE);
  let end = lE + 1;
  let left = undefined;
  let right = undefined;
  if (lE < str.length && str[lE] === '?') {
    [left, end] = parse(str, lE + 1);
    [right, end] = parse(str, end);
  }
  const node = new Node(d, left, right);
  return [node, end];
};

console.log(parse('abc?e:f')[0]);
console.log(parse('abc?e?x:y:f?x:y')[0]);
console.log(parse('abc?e?d:e:f')[0]);
console.log(parse('ab?e?d:e:f?x:y')[0]);

