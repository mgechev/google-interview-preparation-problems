// https://leetcode.com/problems/merge-intervals/description/

// LeetCode uses Interval class.
//const merge = intr => {
//  intr = intr.sort((a, b) => a.start - b.start);
//  for (let i = 0; i < intr.length - 1; i += 1) {
//    const f = intr[i];
//    const s = intr[i + 1];
//    if ((f.end >= s.start && f.end <= s.end) ||
//        (s.end >= f.start && s.end <= f.end)) {
//      const n = new Interval(f.start, Math.max(f.end, s.end));
//      intr[i + 1] = n;
//      intr.splice(i, 1);
//      i--;
//    }
//  }
//  return intr;
//};


const merge = intr => {
  intr = intr.sort((a, b) => a.start - b.start);
  for (let i = 0; i < intr.length - 1; i += 1) {
    const f = intr[i];
    const s = intr[i + 1];
    if ((f.end >= s.start && f.end <= s.end) ||
        (s.end >= f.start && s.end <= f.end)) {
      const n = { start: f.start, end: Math.max(f.end, s.end) };
      intr[i + 1] = n;
      intr.splice(i, 1);
      i--;
    }
  }
  return intr;
};


//console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
//console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
console.log(merge([{ start: 1, end: 4 }, { start: 0,end: 2 }, { start: 3, end: 5 }]));

console.log(merge([
  {
    start: 1,
    end: 3
  },
  {
    start: 2,
    end: 6
  },
  {
    start: 8,
    end: 10
  },
  {
    start: 15,
    end: 18
  }
]));
//console.log(merge([[1,4],[4,5]]));

