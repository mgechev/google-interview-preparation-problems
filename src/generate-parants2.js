const generate = (n, s = '', left = 0, right = 0, res = []) => {
  if (s.length === 2 * n) {
    res.push(s);
    return;
  }
  if (left < n) {
    generate(n, s + '(', left + 1, right, res);
  }
  if (right < left) {
    generate(n, s + ')', left, right + 1, res);
  }
  return res;
};

console.log(generate(5));

