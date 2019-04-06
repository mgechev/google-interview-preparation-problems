// https://www.geeksforgeeks.org/count-possible-decodings-given-digit-sequence/

const totalDecodings = (s, d, c = 0, m = {}) => {
  if (m[c] !== undefined) {
    return m[c];
  }
  if (c >= s.length) {
    return 1;
  }
  let total = 0;
  if (d.has(s[c])) {
    total += totalDecodings(s, d, c + 1, m);
  }
  if (c + 2 <= s.length && d.has(s.substr(c, 2))) {
    total += totalDecodings(s, d, c + 2, m);
  }
  m[c] = total;
  return total;
};

const map = new Map([
  ['1', 'a'],
  ['2', 'b'],
  ['3', 'c'],
  ['4', 'd'],
  ['5', 'e'],
  ['6', 'f'],
  ['7', 'g'],
  ['8', 'h'],
  ['9', 'i'],
  ['10', 'j'],
  ['11', 'k'],
  ['12', 'l'],
  ['13', 'm'],
  ['14', 'n'],
  ['15', 'o'],
  ['16', 'p'],
  ['17', 'q'],
  ['18', 'r'],
  ['19', 's'],
  ['20', 't'],
  ['21', 'u'],
  ['22', 'v'],
  ['23', 'w'],
  ['24', 'x'],
  ['25', 'y'],
  ['26', 'z'],
]);

console.log(totalDecodings('121', map));
console.log(totalDecodings('123', map));
console.log(totalDecodings('1234', map));
console.log(totalDecodings('2563', map));

