// https://leetcode.com/problems/next-permutation/description/

const swap = (a, i, j) => {
  const t = a[i];
  a[i] = a[j];
  a[j] = t;
};

const sort = (a, i) => {
  for (; i < a.length; i += 1) {
    let min = a[i];
    let minIdx = i;
    for (let j = i + 1; j < a.length; j += 1) {
      if (min > a[j]) {
        min = a[j];
        minIdx = j;
      }
    }
    swap(a, minIdx, i);
  }
};

const nextPermutation = a => {
  let smaller = -1;
  for (let i = a.length - 1; i > 0; i -= 1) {
    if (a[i] > a[i - 1]) {
      smaller = i - 1;
      break;
    }
  }
  if (smaller === -1) {
    a.sort((a, b) => a - b);
    return;
  }
  let swapIdx = smaller + 1;
  while (swapIdx < a.length && a[swapIdx] > a[smaller]) swapIdx++;
  swap(a, smaller, swapIdx - 1);
  sort(a, smaller + 1);
};

const a = [1, 2, 3];
console.log([1, 2, 3]);
nextPermutation(a)
console.log(a);
nextPermutation(a)
console.log(a);
nextPermutation(a)
console.log(a);
nextPermutation(a)
console.log(a);
nextPermutation(a)
console.log(a);
nextPermutation(a)
console.log(a);
nextPermutation(a)
console.log(a);

//const b = ['g', 'f', 'g']
//console.log(b);
//nextPermutation(b);
//console.log(b);

const b = [4,2,0,2,3,2,0];
console.log(b);
nextPermutation(b);
console.log(b);
nextPermutation(b);
console.log(b);
nextPermutation(b);
console.log(b);

//console.log(nextPermutation([1,2,3]));
//console.log(nextPermutation([3,2,1]));
//console.log(nextPermutation([1,1,5]));
//console.log(nextPermutation([8, 3, 1]));

//P(a[1,..n]) = swap(a[i, j]) + P(a[...])

// 1,2,3
// 1,3,2
// 2,1,3
// 2,3,1
// 3,1,2
// 3,2,1

// 1,2,3
// 2,1,3
// 2,3,1
// 3,2,1
// 3,1,2
// 1,3,2
//console.log(nextPermutation(nextPermutation(nextPermutation([1,2,3]))));
