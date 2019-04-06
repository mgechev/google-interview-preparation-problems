const fibSubset = arr => {
  let cache = [];
  let isFib = [];
  const fib = n => {
    if (cache[n] !== undefined) return cache[n];
    if (n === 1 || n === 2) {
      return 1;
    }
    isFib[cache[n] = fib(n - 1) + fib(n - 2)] = true;
    return cache[n];
  };
  const max = arr.reduce((a, c) => Math.max(a, c), -Infinity);
  fib(max);
  return arr.filter(e => isFib[e]);
};

console.log(fibSubset([4, 2, 8, 5, 20, 1, 40, 13, 23]));

