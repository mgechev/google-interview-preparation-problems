const printDiamond = w => {
  if (w % 2 === 0) {
    console.error('The number is not odd');
    return;
  }
  const helper = (w, c, d = false) => {
    const p = Math.floor((w - c) / 2);
    let str = '';
    for (let i = 0; i < p; i += 1) {
      str += ' ';
    }
    for (let i = 0; i < c; i += 1) {
      str += '#';
    }
    console.log(str);
    if (c === w) {
      d = true;
    }
    if (d && c === 1) {
      return;
    } else {
      if (d) c -= 2;
      else c += 2;
      helper(w, c, d);
    }
  };
  helper(w, 1);
};

printDiamond(1);
console.log();
// printDiamond(3);
// console.log();
// printDiamond(5);
// console.log();
// printDiamond(7);
// console.log();
// printDiamond(9);
// console.log();
// printDiamond(11);
// console.log();
// printDiamond(111);
// console.log();
// printDiamond(177);
