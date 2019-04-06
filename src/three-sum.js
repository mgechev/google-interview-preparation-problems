const threeSum = a => {
  const map = new Map();
  for (let i = 0; i < a.length; i += 1) {
    map.set(a[i], i);
  }
  for (let i = 0; i < a.length; i += 1) {
    for (let j = i + 1; j < a.length - 1; j += 1) {
      const res = map.get(-(a[i] + a[j]));
      if (res !== undefined && res !== i && res !== j) {
        return [a[res], a[i], a[j]];
      }
    }
  }
  return null;
};

const a = [1, -3, 4, 2, 9, 9, 9];
console.log(threeSum(a));

