const sum = (a, b) => {
  if (a.length < b.length) {
    const tmp = a;
    a = b;
    b = tmp;
  }
  const result = [];
  let currentA = a.length - 1;
  let currentB = b.length - 1;
  let carry = 0;
  while (currentA >= 0) {
    const sum = a[currentA--] + (b[currentB--] || 0) + carry;
    const num = sum % 10;
    carry = Math.floor(sum / 10);
    result.unshift(num);
  }
  if (carry !== 0) {
    result.unshift(carry);
  }
  return result;
};

console.log(sum([1,9,9,9], [9, 9]));

