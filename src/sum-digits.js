// https://www.careercup.com/question?id=6206693105991680

const distance = (a, b) => {
  const memo = [];
  for (let i = 0; i <= a.length; i += 1) {
    memo[i] = [i];
  }
  for (let j = 0; j <= b.length; j += 1) {
    memo[0][j] = j;
  }
  for (let i = 1; i <= a.length; i += 1) {
    for (let j = 1; j <= b.length; j += 1) {
      let diff = 0;
      if (a[i - 1] !== b[j - 1]) diff = 1;
      memo[i][j] = Math.min(
        memo[i - 1][j - 1] + diff,
        memo[i - 1][j] + 1,
        memo[i][j - 1] + 1
      );
    }
  }
  return memo[a.length][b.length];
};

const checkDigits = (a, b) => {
  a = a.toString();
  b = b.toString();
  return Math.abs(a.length - b.length) === 1 && distance(a, b) === 1;
};

const sumDigits = sum => {
  const result = [];
  for (let i = 1; i < Math.floor(sum / 2); i += 1) {
    if (checkDigits(i, sum - i)) {
      result.push([i, sum - i]);
    }
  }
  return result;
};

console.log(sumDigits(2852312));

