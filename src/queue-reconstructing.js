// https://leetcode.com/problems/queue-reconstruction-by-height/description/

const reconstructQueue = p => {
  const copy = p.slice();
  for (let i = 0; i < copy.length; i += 1) {
    copy[i] = copy[i].slice();
  }
  let used = [];
  let res = [];
  while (res.length < p.length) {
    let smallest = [Infinity, Infinity];
    let idx = 0;
    for (let i = 0; i < copy.length; i += 1) {
      if (!used[i] && copy[i][1] === 0 && copy[i][0] < smallest[0]) {
        smallest = copy[i];
        idx = i;
      }
    }
    smallest[1] = p[idx][1];
    res.push(smallest);
    used[idx] = true;
    for (let i = 0; i < copy.length; i += 1) {
      if (!used[i] && copy[i][0] <= smallest[0]) {
        copy[i][1]--;
      }
    }
  }
  return res;
};

console.log(reconstructQueue([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]));

