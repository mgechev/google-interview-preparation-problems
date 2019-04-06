// const a = [
//   ['a', 'b', 'c', 'd', 'e'],
//   ['f', 'g', 'h', 'i', 'j'],
//   ['k', 'l', 'm', 'n', 'o'],
//   ['p', 'q', 'r', 's', 't'],
//   ['u', 'v', 'w', 'x', 'y'],
//   ['z']
// ];

const a = 'a'.charCodeAt(0);
const colNum = 5;

const getCell = l => {
  const code = l.charCodeAt(0) - a;
  const row = Math.floor(code / colNum);
  const col = code - row * colNum;
  return [row, col];
};

const printLetterPath = (current, future) => {
  for (let i = 0; i < current.length; i += 1) {
    let c = current[i];
    while (c !== future[i]) {
      if (c > future[i]) {
        c -= 1;
        console.log(i === 0 ? 'Left' : 'Top');
      } else {
        c += 1;
        console.log(i === 0 ? 'Right' : 'Bottom');
      }
    }
  }
  console.log('OK');
};

const printPath = word => {
  word = word.toLowerCase().split('');
  let pos = [0, 0];
  while (word.length) {
    const c = word.shift();
    const cell = getCell(c);
    printLetterPath(pos, cell);
    pos = cell;
  }
};

printPath('CON');
// printPath('COZ');
