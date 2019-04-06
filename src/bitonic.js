const cache = {};
const longestIncreasing2 = (a, min, prev) => {
  if (min >= a.length) {
    return 0;
  }
  if (cache[min + '-' + prev]) {
    return cache[min + '-' + prev];
  }
  let longest = 0;
  for (let i = min; i < a.length; i += 1) {
    const gt = a[i] > prev;
    let c = -Infinity;
    if (gt) {
      c = 1 + longestIncreasing2(a, i + 1, a[i]);
    } else {
      c = longestIncreasing2(a, i + 1, prev);
    }
    if (c > longest) {
      longest = c;
    }
  }
  cache[min + '-' + prev] = longest;
  return longest;
};

const longestIncreasing = a => {
  if (!a.length) {
    return 0;
  }
  const longestSoFar = [[1, a[0]]];
  for (let i = 1; i < a.length; i += 1) {
    let longest = -Infinity;
    let biggest = a[i];
    for (let j = 0; j < longestSoFar.length; j += 1) {
      const c = longestSoFar[j];
      const gt = +(c[1] < a[i]);
      if (c[0] + gt > longest) {
        longest = c[0] + gt;
        if (gt) {
          biggest = a[i];
        } else {
          biggest = c[1];
        }
      }
    }
    longestSoFar.push([longest, biggest]);
  }
  return longestSoFar.pop()[0];
};

const longestDecreasing = (a, min, prev) => {
  if (min >= a.length) {
    return 0;
  }
  let longest = 0;
  for (let i = min; i < a.length; i += 1) {
    const lt = a[i] < prev;
    let c = -Infinity;
    if (lt) {
      c = 1 + longestDecreasing(a, i + 1, a[i]);
    } else {
      c = longestIncreasing(a, i + 1, prev);
    }
    if (c > longest) {
      longest = c;
    }
  }
  return longest;
};


console.log(longestIncreasing2([15, 27, 14, 38, 26, 55, 46, 65, 85], 0, -Infinity));
console.log(longestIncreasing([15, 27, 14, 38, 26, 55, 46, 65, 85]));

const longestBitonic = a => {
  const allIncreasing = [];
  for (let i = 0; i < a.length; i += 1) {
    allIncreasing.push({
      start: i,
      seq: longestIncreasing(a.slice(0, i), 0, -Infinity)
    });
  }
  console.log(allIncreasing);
  let longest = 0;
  for (let i = 0; i < allIncreasing.length; i += 1) {
    const current = allIncreasing[i];
    const len = longestDecreasing(a, current.start, Infinity);
    if (len + current.seq > longest) {
      longest = len + current.seq;
    }
  }
  return longest;
};

// console.log(longestBitonic([4, 2, 5, 9, 7, 6, 10, 3, 1]));

