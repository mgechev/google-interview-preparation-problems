const helper = (n, s) => {
  let c = 0;
  let used = false;
  for (let i = s; i < n.length; i++) {
    if (n[i] === 1) c++;
    else if (used) return c;
    else {
      used = true;
      c++;
    }
  }
  return c;
};

const findMaxConsecutiveOnes2 = n => {
  let max = 0;
  for (let i = 0; i < n.length; i++) {
    max = Math.max(max, helper(n, i));
  }
  return max;
};

const findMaxConsecutiveOnes = n => {
  let left = 0;
  let right = 0;
  let zeroes = 0;
  let res = 0;
  while (right < n.length) {
    if (n[right] === 1 || (n[right] === 0 && zeroes < 1)) {
      res = Math.max(res, right - left + 1);
      zeroes += (n[right] === 1) ? 0 : 1;
      right++;
    } else {
      while (n[left] !== 0) {
        left++;
      }
      left++;
      zeroes--;
    }
  }
  return res;
};

const arr = [];
for (let i = 0; i < 10000; i++) {
  arr.push(Math.random() > 0.5 ? 1 : 0);
}

//console.log(findMaxConsecutiveOnes(arr));
//console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0]));
//console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1]));
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]));
console.log(findMaxConsecutiveOnes([0]));
console.log(findMaxConsecutiveOnes([0, 1]));
console.log(findMaxConsecutiveOnes([1, 0]));