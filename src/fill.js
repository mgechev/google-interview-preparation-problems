const arr = [['X', 'O', 'X', 'X', 'X', 'X'],
             ['X', 'O', 'X', 'X', 'O', 'X'],
             ['X', 'X', 'X', 'O', 'O', 'X'],
             ['O', 'X', 'X', 'X', 'X', 'X'],
             ['X', 'X', 'X', 'O', 'X', 'O'],
             ['O', 'O', 'X', 'O', 'O', 'O'],
            ];

const shouldColor = (a, i, j) => {
  return a[i][j] === 'O' && a[i + 1] && a[i + 1][j] !== undefined && a[i - 1] && a[i - 1][j] !== undefined &&
    a[i][j + 1] !== undefined && a[i][j - 1] !== undefined;
};

const shouldColorRegion = (a, i, j, cache = {}) => {
  if (i < 0 || i >= a.length || j < 0 || j >= a.length) {
    return false;
  }
  if (a[i][j] === 'X') {
    return true;
  }
  cache[i] = cache[i] || {};
  cache[i][j] = true;
  const color = [shouldColor(a, i, j)];
  if (!cache[i + 1] || !cache[i + 1][j]) {
    color.push(shouldColorRegion(a, i + 1, j, cache));
  }
  if (!cache[i - 1] || !cache[i - 1][j]) {
    color.push(shouldColorRegion(a, i - 1, j, cache));
  }
  if (!cache[i] || !cache[i][j + 1]) {
    color.push(shouldColorRegion(a, i, j + 1, cache));
  }
  if (!cache[i] || !cache[i][j - 1]) {
    color.push(shouldColorRegion(a, i, j - 1, cache));
  }
  return color.reduce((p, c) => p && c, true);
};

const fillRegion = (a, i, j) => {
  if (!a[i] || !a[i][j] || a[i][j] === 'X') {
    return;
  }
  a[i][j] = 'X';
  fillRegion(a, i + 1, j);
  fillRegion(a, i - 1, j);
  fillRegion(a, i, j + 1);
  fillRegion(a, i, j - 1);
};

const fill = a => {
  for (let i = 0; i < a.length; i += 1) {
    for (let j = 0; j < a[i].length; j += 1) {
      if (shouldColorRegion(a, i, j)) {
        fillRegion(a, i, j);
      }
    }
  }
};

fill(arr);

console.log(arr.map(r => r.join('')).join('\n'));

