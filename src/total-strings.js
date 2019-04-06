// https://www.geeksforgeeks.org/count-strings-can-formed-using-b-c-given-constraints/

// Remove all which does not align with the requirements.
const generateVariations = (n, chars = ['a', 'b', 'c'], str = '') => {
  if (str.length === n) {
    console.log(str);
    return;
  }
  for (let i = 0; i < chars.length; i += 1) {
    generateVariations(n, chars, str + chars[i]);
  }
};

// console.log(generateVariations(3));

const generateVariationsBacktrack = (n, chars = ['a', 'b', 'c'], cons = { a: Infinity, b: 1, c: 2 }, str = '') => {
  if (str.length === n) {
    console.log(str);
    return;
  }
  for (let i = 0; i < chars.length; i += 1) {
    if (cons[chars[i]] === 0) {
      continue;
    }
    cons[chars[i]] -= 1;
    generateVariationsBacktrack(n, chars, cons, str + chars[i]);
    cons[chars[i]] += 1;
  }
};


// console.log(generateVariationsBacktrack(3));

const generateVariationsBacktrackNoString = (n, chars = ['a', 'b', 'c'], cons = { a: Infinity, b: 1, c: 2 }, c = {}) => {
  c[n] = c[n] || {};
  c[n] = c[n] || [];
  c[n][cons.b] = c[n][cons.b] || [];
  if (c[n][cons.b][cons.c]) {
    return c[n][cons.b][cons.c];
  }
  if (n === 0) {
    return 1;
  }
  let total = 0;
  for (let i = 0; i < chars.length; i += 1) {
    if (cons[chars[i]] === 0) {
      continue;
    }
    cons[chars[i]] -= 1;
    total += generateVariationsBacktrackNoString(n - 1, chars, cons, c);
    cons[chars[i]] += 1;
  }
  c[n][cons.b][cons.c] = total;
  return total;
};

console.log(generateVariationsBacktrackNoString(3));
console.log(generateVariationsBacktrackNoString(4));
console.log(generateVariationsBacktrackNoString(80));
console.log(generateVariationsBacktrackNoString(100));
console.log(generateVariationsBacktrackNoString(200));
console.log(generateVariationsBacktrackNoString(300));
console.log(generateVariationsBacktrackNoString(500));
console.log(generateVariationsBacktrackNoString(1000));
console.log(generateVariationsBacktrackNoString(2000));

const totalStrings = n => {
  return 1 + // only 'a's
    n * 2 + // only 'a's with 1 'b' or 1 'c'
    n * ((n * n) - 1) / 2; // 2 'c's and 1 'b'
};

console.assert(totalStrings(3) === 19);
console.assert(totalStrings(4) === 39);
