const flipAndInvertImage = a => a.map(i => i.reverse().map(c => c === 1 ? 0 : 1));

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]));

