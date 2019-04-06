const isOp = t => /\+|\-|\*|\//.test(t);
const isNum = n => /\d/.test(n);

const parse = (ts, i = 0) => {
  if (i >= ts.length) return [null, i];
  if (isOp(ts[i])) {
    const node = { op: ts[i] };
    const children = [];
    let current;
    let idx = i + 1;
    while (idx < ts.length) {
      [current, idx] = parse(ts, idx);
      if (current) children.push(current);
    }
    node.children = children;
    return [node, idx];
  } else {
    return [{ val: parseInt(ts[i]) }, i + 1];
  }
};

const ops = {
  '+': a => a.reduce((a, c) => a + c, 0),
  '-': a => a.reduce((a, c) => a - c),
  '*': a => a.reduce((a, c) => a * c),
  '/': a => a.reduce((a, c) => a / c),
};

const eval = node => {
  if (node.val !== undefined) {
    return node.val;
  }
  return ops[node.op](node.children.map(eval));
};

const evaluate = s => {
  const tokens = s.split(' ').map(c => c.trim());
  const [root, _] = parse(tokens);
  return eval(root);
};

console.log(evaluate('+ 1 2 3 * 3 2 2 - 2 + 2 3 4 + 1 2'));

