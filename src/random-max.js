// https://www.careercup.com/question?id=5669417594650624

const randMax = arr => {
  let totalMax = 0;
  let max = -Infinity;
  for (let i = 0; i < arr.length; i += 1) {
    max = Math.max(arr[i], max);
  }
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === max) totalMax += 1;
  }
  let idxToGet = Math.floor(Math.random() * totalMax);
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === max && !idxToGet) return i;
    if (arr[i] === max) {
      idxToGet -= 1;
    }
  }
  return -1;
};

const arr = [1, -2, 0, 6, 2, -4, 6, 6];
console.log(randMax(arr));
