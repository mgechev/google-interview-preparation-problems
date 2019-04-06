// https://leetcode.com/problems/judge-route-circle/description/

const map = {
  U: [-1, 0],
  D: [1, 0],
  L: [0, -1],
  R: [0, 1]
};

const judgeCircle = moves => {
  let pos = [0, 0];
  moves.split('').forEach(m => {
    pos[0] += map[m][0];
    pos[1] += map[m][1];
  });
  return pos[0] === 0 && pos[1] === 0;
};

