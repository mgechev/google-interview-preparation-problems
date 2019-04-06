const hanoi = (s1, s2, s3, n) => {
  if (!n) {
    return;
  }
  hanoi(s1, s3, s2, n - 1);
  console.log('Move a disk', s1, '->', s3);
  hanoi(s2, s1, s3, n - 1);
};

const hanoi2 = (s1, s2, s3, n) => {
  if (!n) {
    return [];
  }
  return hanoi2(s1, s3, s2, n - 1)
    .concat([[s1, s2]])
    .concat(hanoi2(s2, s1, s3, n - 1));
};

// Tn = 2 * Tn-1 + 1

// hanoi('s1', 's2', 's3', 3);
console.log(hanoi2('s1', 's2', 's3', 3));
console.log(hanoi('s1', 's2', 's3', 3));

