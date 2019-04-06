// https://leetcode.com/problems/flip-game-ii/description/

const flip = (n, ...p) => {
  for (let i = 0; i < p.length; i += 1) {
    if (n[p[i]] === '-') {
      n[p[i]] = '+';
    } else {
      n[p[i]] = '-';
    }
  }
};

const helper = (n, c = 0) => {
  for (let i = 0; i < n.length - 1; i += 1) {
    if (n[i] === '+' && n[i + 1] === '+') {
      flip(n, i, i + 1);
      const res = helper(n, c + 1);
      flip(n, i, i + 1);
      if (!res) {
        return true;
      }
    }
  }
  return false;
};

const canWin = n => helper(n.split(''));

//console.log(canWin('++++'));
//console.log(canWin('+++++'));
//console.log(canWin('++++-++++++'));
//console.assert(!canWin('+++++++++'));
//console.log(canWin('++++++++++'));
//let count = '';
//for (let i = 0; i < 100; i += 1) {
//  count += '+';
//  console.log(i, canWin(count));
//}

