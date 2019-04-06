// https://www.geeksforgeeks.org/how-to-print-maximum-number-of-a-using-given-four-keys/

const maxNumAs = (n, m = 0, c = 0, me = {}) => {
  if (n <= 0) {
    return m;
  }
  me[n] = me[n] || {};
  me[n][m] = me[n][m] || {};
  if (me[n][m][c]) {
    return me[n][m][c];
  }
  const res = Math.max(
    maxNumAs(n - 1, m + 1, c, me),
    maxNumAs(n - 2, m, m, me),
    maxNumAs(n - 1, m + c, c, me)
  );
  me[n][m][c] = res;
  return res;
};

console.log(maxNumAs(3));
console.log(maxNumAs(7));
console.log(maxNumAs(11));
console.log(maxNumAs(20));

