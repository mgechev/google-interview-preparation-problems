// https://www.geeksforgeeks.org/median-of-stream-of-running-integers-using-stl/

const medianStream = () => {
  const memo = [];
  let current = 0;
  let free = current + 1;
  return n => {
    memo.push(n);
    current += 1;
    if (free === current - 2) {
      free = current;
      memo.shift();
    }
    if (current % 2 === 0) {
      console.log((memo[0] + memo[1]) / 2);
    } else {
      console.log(memo[0]);
    }
  };
};

// If it's sorted
// Otherwise, we need to use two heaps
// https://stackoverflow.com/questions/10657503/find-running-median-from-a-stream-of-integers
const a = [5, 10, 15, 20];
const cb = medianStream();
let c = 0;
const interval = setInterval(() => {
  if (c >= a.length) {
    clearInterval(interval);
    return;
  }
  cb(a[c]);
  c++;
}, 100);

