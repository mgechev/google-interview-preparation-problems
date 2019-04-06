const Max = 32;
const reverseBits = n => {
  for (let i = 0; i < Max / 2; i += 1) {
    const left = n & (1 << i);
    const right = n & (1 << Max - i - 1);
    if (left) {
      n |= 1 << Max - i - 1;
    } else {
      n &= ~(1 << Max - i - 1);
    }
    if (right) {
      n |= 1 << i;
    } else {
      n &= ~(1 << i);
    }
    n = n >>> 0;
  }
  return Math.abs(n);
};

console.log(1431655765..toString(2));
console.log(reverseBits(1431655765).toString(2));
console.log((0xffffffff).toString(2));
console.log(reverseBits(0xffffffff).toString(2));
console.log(reverseBits(0xffffffff));

