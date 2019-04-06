// https://www.geeksforgeeks.org/bresenhams-line-generation-algorithm/

// Also you can avoid floating point arithmetics with Bresenham.
const arr = [[0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0]];


const draw = (c, x, y, d) => c[x][y] = d;

const drawLine = (canvas, s, e) => {
  const dx = Math.abs(s[0] - e[0]);
  const dy = Math.abs(s[1] - e[1]);
  const cx = s[0] > e[0] ? -1 : 1;
  const cy = s[1] > e[1] ? -1 : 1;
  let err = dx - dy;
  let x1 = s[0];
  let y1 = s[1];
  while (x1 !== e[0] || y1 !== e[1]) {
    draw(canvas, x1, y1, 1);
    const dbl = err + err;
    if (dbl > -dy) {
      err -= dy;
      x1 += cx;
    }
    if (dbl < dx) {
      err += dx;
      y1 += cy;
    }
  }
  draw(canvas, e[0], e[1], 1);
};

const drawLineNaive = (canvas, [x1, y1], [x2, y2]) => {
  const diff = Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2));
  const sx = Math.abs(x2 - x1) > diff ? diff / (x2 - x1) : (x2 - x1) / diff;
  const sy = Math.abs(y2 - y1) > diff ? diff / (y2 - y1) : (y2 - y1) / diff;
  let xs = x1;
  let ys = y1;
  while (Math.floor(xs) !== x2 || Math.floor(ys) !== y2) {
    draw(canvas, Math.floor(xs), Math.floor(ys), 1);
    xs += sx;
    ys += sy;
  }
  draw(canvas, x2, y2, 1);
};

drawLine(arr, [1, 4], [9, 9]);
drawLineNaive(arr, [1, 4], [9, 1]);

console.log(arr.map(r => r.join(' ')).join('\n'));

