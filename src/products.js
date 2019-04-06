// https://leetcode.com/problems/product-of-array-except-self/description/

const productExceptSelf = a => {
  let left = [a[0]];
  let right = [];
  right[a.length - 1] = a[a.length - 1];
  for (let i = 1; i < a.length; i += 1) {
    left[i] = left[i - 1] * a[i];
  }
  for (let i = a.length - 2; i >= 0; i -= 1) {
    right[i] = right[i + 1] * a[i];
  }
  const out = [right[1]];
  for (let i = 1; i < a.length - 1; i += 1) {
    out[i] = left[i - 1] * right[i + 1];
  }
  out[a.length - 1] = left[a.length - 2];
  return out;
};

const productExceptSelfFaster = a => {
  const result = [1];
  for (let i = 0; i < a.length - 1; i++) {
    result.push(result[i] * a[i]);
  }
  let last = 1;
  for (let i = a.length - 1; i >= 0; i--) {
    result[i] *= last;
    last *= a[i];
  }
  return result;
};

console.log(productExceptSelf([1,2,3,4]));

