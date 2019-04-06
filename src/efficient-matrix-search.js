// https://leetcode.com/problems/search-a-2d-matrix-ii/description/

const searchMatrix = (m, v) => {
  let top = 0;
  let bottom = m.length;
  let rowIdx = bottom - 1;
  while (top < bottom) {
    let mid = Math.floor(top + (bottom - top) / 2);
    if (m[mid][0] <= v && (mid + 1 >= m.length || m[mid + 1][0] > v)) {
      rowIdx = mid;
      break;
    } else if (m[mid][0] > v) {
      bottom = mid;
    } else {
      top = mid + 1;
    }
  }

  while (rowIdx >= 0) {
    let row = m[rowIdx];
    let left = 0;
    let right = row.length;
    while (left < right) {
      let mid = Math.floor(left + (right - left) / 2);
      if (row[mid] === v) {
        return true;
      } else if (row[mid] > v) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    rowIdx--;
  }

  return false;
};

const mtx = [
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
];

console.log(searchMatrix(mtx, 1));
//console.log(searchMatrix(mtx, 5));
//console.log(searchMatrix(mtx, 6));
//console.log(searchMatrix(mtx, 20));
