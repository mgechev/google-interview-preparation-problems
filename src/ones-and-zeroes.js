// https://leetcode.com/problems/ones-and-zeroes/description/

const helper = (strs, m, n, map, current = 0, total = 0, c = {}) => {
  c[current] = c[current] || {};
  c[current][m] = c[current][m] || {};
  if (m < 0 || n < 0) return -Infinity;
  if (c[current][m][n]) return c[current][m][n];
  if (current >= strs.length) return total;
  const str = strs[current];
  const ms = map.get(str)['0'];
  const ns = map.get(str)['1'];
  c[current][m][n] = Math.max(
    helper(strs, m - ms, n - ns, map, current + 1, total + 1, c),
    helper(strs, m, n, map, current + 1, total, c)
  );
  return c[current][m][n];
};

const findMaxForm = (strs, m, n) => {
  const map = new Map();
  for (let i = 0; i < strs.length; i += 1) {
    const ob = {
      '0': 0, '1': 0
    };
    for (let j = 0; j < strs[i].length; j += 1) {
      ob[strs[i][j]]++;
    }
    map.set(strs[i], ob);
  }
  return helper(strs, m, n, map);
};

console.log(findMaxForm(['10', '0001', '111001', '1', '0'], 5, 3));
console.log(findMaxForm(['10', '0', '1'], 1, 1));
console.log(findMaxForm(['0', '0', '1', '1'], 2, 2));
console.log(findMaxForm(['10', '0001', '111001', '1', '0'], 3, 4));

