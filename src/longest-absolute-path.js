// https://leetcode.com/problems/longest-absolute-file-path/description/

const getLevel = n => {
  const tab = '\t';
  let i = 0;
  while (i < n.length) {
    if (n.substring(i).startsWith(tab)) i++;
    else return i;
  }
  return i;
};

const trim = t => {
  return t.replace(/\t/g, '');
};

const lengthLongestPath = s => {
  if (!s) {
    return 0;
  }
  const stack = [];
  const levels = s.split('\n').reverse();
  stack.push({
    l: 0,
    n: levels.pop()
  });
  let current = stack[0].n.length;
  let max = 0;
  if (stack[0].n.indexOf('.') >= 0) {
    max = stack[0].n.length;
  }
  while (stack.length || levels.length) {
    const n = levels.pop();
    if (!n) {
      break;
    }
    const level = getLevel(n);
    while (stack.length && level <= stack[stack.length - 1].l) {
      const ne = stack.pop();
      current -= trim(ne.n).length;
    }
    stack.push({
      l: level,
      n
    });
    current += trim(n).length;
    const ex = n.indexOf('.');
    if (ex >= 0 && ex < n.length - 1) {
      max = Math.max(current + level, max);
    }
  }
  return max;
};

console.log(lengthLongestPath('dir\n\tssubdir1\n\tsubdir2\n\t\tfile.ext'));
console.log(lengthLongestPath('file.ext'));
console.log(lengthLongestPath('dir\n        file.txt'));
console.log(lengthLongestPath('dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext'));
console.log(lengthLongestPath('dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext'));

