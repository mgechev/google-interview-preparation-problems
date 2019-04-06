const generate = (n, res = [], c = '', opening = 0, closing = 0) => {
  if (opening + closing === 2 * n && opening === closing) {
    res.push(c);
    return res;
  }
  if (opening < n) {
    generate(n, res, c + '(', opening + 1, closing);
  }
  if (closing < opening) {
    generate(n, res, c + ')', opening, closing + 1);
  }
  return res;
};

console.log(generate(3));

