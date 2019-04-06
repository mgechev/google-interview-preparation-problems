// https://www.geeksforgeeks.org/multiply-large-numbers-represented-as-strings/

const dig = s => parseInt(s, 10);

const sum = (s, t) => {
  if (s.length > t.length) {
    t = t.padStart(t.length + s.length - t.length, '0');
  } else {
    s = s.padStart(s.length + t.length - s.length, '0');
  }
  let c = 0;
  let res = '';
  for (let i = s.length - 1; i >= 0; i -= 1) {
    const r = dig(s[i]) + dig(t[i]) + c;
    const d = r % 10;
    c = Math.floor(r / 10);
    res = d.toString() + res;
  }
  if (c !== 0) {
    res = c.toString() + res;
  }
  return res;
};

console.log(sum('1993', '98'));

const multiplyStrings = (s, t) => {
  let last = null;
  for (let i = t.length - 1; i >= 0; i -= 1) {
    let c = 0;
    let current = '';
    for (let j = s.length - 1; j >= 0; j -= 1) {
      const r = dig(s[j]) * dig(t[i]) + c;
      if (j === 0) {
        current = r.toString() + current;
      } else {
        const d = r % 10;
        c = Math.floor(r / 10);
        current = d.toString() + current;
      }
    }
    if (last === null) {
      last = current;
    } else {
      last = sum(last, current.padEnd(current.length + (t.length - 1 - i), '0'));
    }
  }
  return last;
};

console.assert(multiplyStrings('4154', '51454') === '213739916');
console.assert(
  multiplyStrings(
    '654154154151454545415415454', '63516561563156316545145146514654'
  ) === '41549622603955309777243716069997997007620439937711509062916'
);

