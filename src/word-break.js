// https://www.geeksforgeeks.org/word-break-problem-using-backtracking/

const words = new Set(['i', 'like', 'sam', 'sung', 'samsung', 'mobile', 'ice', 'cream', 'icecream', 'man', 'go', 'mango']);

const canBreak = (w, s, i = 0, memo = {}) => {
  if (memo[i] !== undefined) {
    return memo[i];
  }
  if (i >= s.length) {
    return true;
  }
  if (w.has(s.substring(i, s.length))) {
    return true;
  }
  for (let j = i + 1; j < s.length; j += 1) {
    if (w.has(s.substring(i, j)) && canBreak(w, s, j, memo)) {
      memo[i] = true;
      return true;
    }
  }
  memo[i] = false;
  return false;
};

console.log(canBreak(words, 'ilike'));
console.log(canBreak(words, 'ilikesamsung'));
console.log(canBreak(words, 'iiiiiiii'));
console.log(canBreak(words, 'samsungandmangok'));

