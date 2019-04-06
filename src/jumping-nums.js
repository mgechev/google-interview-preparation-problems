// https://www.geeksforgeeks.org/print-all-jumping-numbers-smaller-than-or-equal-to-a-given-value/

const isJumping = n => {
  let last = null;
  while (n) {
    let c = n % 10;
    n = Math.floor(n / 10);
    if (last === null) {
      last = c;
      continue;
    }
    if (Math.abs(last - c) === 1) {
      last = c;
      continue;
    }
    return false;
  }
  return true;
};

//console.log(isJumping(124));

const jumpingNums = n => {
  while (n >= 0) {
    if (isJumping(n)) {
      console.log(n);
    }
    n--;
  }
};

const jumpingEfficient = n => {
  if (n <= 0) {
    return;
  }
  let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(0);
  while (true) {
    let c = num.shift();
    if (c > n) {
      return;
    }
    console.log(c);
    const last = c % 10;
    if (last - 1 >= 0) {
      num.push(10 * c + last - 1);
    }
    if (last + 1 <= 9) {
      num.push(10 * c + last + 1);
    }
  }
};

console.log(jumpingNums(105));
console.log(jumpingEfficient(105));

