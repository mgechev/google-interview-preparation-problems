const count = n => {
  let total = 0;
  for (let i = 0; i < 32; i++) {
    if (n & (1 << i)) {
      total++;
    }
  }
  return total;
};

const flip = (n, b) => n ^ (1 << b);
const set = (n, b) => n | (1 << b);
const clear = (n, b) => n & ~(1 << b);

console.log('-------- Count --------');
console.log(count(1));
console.log(count(2));
console.log(count(3));
console.log(count(4));
console.log(count(5));
console.log(count(6));
console.log(count(7));
console.log('-------- Flip --------');
console.log(flip(2, 0));
console.log(flip(3, 0));
console.log('-------- Set --------');
console.log(set(2, 0));
console.log('-------- Clear --------');
console.log(clear(3, 0));


