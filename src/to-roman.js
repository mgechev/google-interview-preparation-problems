// https://leetcode.com/problems/integer-to-roman/description/

const map = [
  {
    N: 1,
    U: 1,
    A: 'I',
  },
  {
    N: 5,
    A: 'V',
    U: 1
  },
  {
    N: 10,
    U: 1,
    A: 'X',
  },
  {
    N: 50,
    U: 10,
    A: 'L',
  },
  {
    U: 10,
    N: 100,
    A: 'C',
  },
  {
    N: 500,
    U: 100,
    A: 'D',
  },
  {
    N: 1000,
    U: 100,
    A: 'M'
  }
].reverse();

const pre = u => {
  for (let i = 0; i < map.length; i += 1) {
    if (map[i].N === u.U) {
      return map[i];
    }
  }
};

const intToRoman = i => {
  let res = '';
  for (let j = 0; j < map.length; j += 1) {
    if (i === 0) {
      return res;
    }
    const u = map[j];
    const d = u.N - u.U
    if (i - d >= 0 && i - d < u.U) {
      res += pre(u).A + u.A;
      i -= d;
      continue;
    }
    const div = Math.floor(i / u.N);
    if (div === 0) {
      continue;
    }
    let tmp = div;
    while (tmp) {
      res += u.A;
      tmp -= 1;
    }
    i -= div * u.N;
    j -= 1;
  }
  return res;
};

console.log(intToRoman(3));
console.log(intToRoman(4));
console.log(intToRoman(9));
console.log(intToRoman(58));
console.log(intToRoman(1994));
console.log(intToRoman(1990));
console.log(intToRoman(490));

