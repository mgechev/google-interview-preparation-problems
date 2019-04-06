const intersects = (a, b) => {
  if ((a[0] >= b[0] && a[0] <= b[1]) ||
      (a[1] >= b[0] && a[1] <= b[1]) ||
      (b[0] >= a[0] && b[0] <= a[1]) ||
      (b[1] >= a[0] && b[1] <= a[1])) {
    return true;
  }
  return false;
};

const longestNonOverlappingSeriesHelper = (intervals, current = 0, result = []) => {
  if (current >= intervals.length) {
    return result.slice();
  }
  let longest = [];
  for (let i = current; i < intervals.length; i += 1) {
    let added = false;
    if (!result.some(interval => intersects(intervals[i], interval))) {
      result.push(intervals[i]);
      added = true;
    }
    const interval = longestNonOverlappingSeriesHelper(intervals, i + 1, result);
    if (interval.length > longest.length) {
      longest = interval;
    }
    if (added) {
      result.pop();
    }
  }
  return longest;
};

const longestNonOverlappingSeries = intervals => {
  return longestNonOverlappingSeriesHelper(intervals);
};

const lngst = intervals => {
  intervals = intervals.sort((a, b) => a[1] - b[1]);
  let result = [intervals[0]];
  for (let i = 1; i < intervals.length; i += 1) {
    const c = intervals[i];
    if (c[0] > result[result.length - 1][1]) {
      result.push(c);
    }
  }
  return result;
};

const intervals = [
  [1, 4], [3, 5], [0, 6], [5, 7], [3, 8], [5, 9], [6, 10], [8, 11], [8, 12], [2, 13], [12, 14],
  [1, 4], [3, 5], [0, 6], [5, 7], [3, 8], [5, 9], [6, 10], [8, 11], [8, 12], [2, 13], [12, 14]
];

// console.log(longestNonOverlappingSeries(intervals));
console.log(lngst(intervals));
