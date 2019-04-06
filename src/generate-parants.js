// https://leetcode.com/problems/generate-parentheses/description/

const swap = (a, i, j) => {
  const t = a[i];
  a[i] = a[j];
  a[j] = t;
};

const generate = (l, c, m) => {
  if (c >= l.length - 1) {
    const str = l.join('');
    if (!m[str]) {
      m[str] = true;
    }
    return;
  }
  for (let i = c + 1; i < l.length; i += 1) {
    swap(l, c, i);
    generate(l, c + 2, m);
    swap(l, c, i);
  }
};

const generateParenthesis = n => {
  const list = [];
  for (let i = 0; i < n; i += 1) {
    list.push('(', ')');
  }
  const p = {};
  generate(list, 1, p);
  return Object.keys(p);
};

const generateParenthesis2 = n => {
  const res = [];
  const gen = (s = '', left = 0, right = 0) => {
    if (right + left === 2 * n) {
      res.push(s);
      return;
    }
    if (left < n) {
      gen(s + '(', left + 1, right);
    }
    if (right < left) {
      gen(s + ')', left, right + 1);
    }
  }
  gen();
  return res;
};

console.log(generateParenthesis(3));
console.log(generateParenthesis2(3));

