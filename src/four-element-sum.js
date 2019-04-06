// https://www.geeksforgeeks.org/find-four-elements-that-sum-to-a-given-value-set-2/

const binarySearch = (a, el) => {
  let left = 0;
  let right = a.length;
  while (left < right) {
    let mid = Math.floor((right - left) / 2 + left);
    if (a[mid] === el) {
      return mid;
    } else if (a[mid] > el) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

const fourElementSum = (a, k) => {
  a = a.sort((a, b) => a - b);
  const map = new Map();
  for (let i = 0; i < a.length; i += 1) {
    for (let j = 0; j < a.length; j += 1) {
      if (i === j) continue;
      let set = new Set();
      const sum = a[i] + a[j];
      if (map.has(sum)) {
        set = map.get(sum);
      }
      set.add(i);
      set.add(j);
      map.set(sum, set);
    }
  }
  const printed = {};
  for (const [sm, v] of map) {
    for (let i = 0; i < a.length; i += 1) {
      if (v.has(i)) continue;
      const diff = k - (sm + a[i]);
      if (diff <= 0) continue;
      const forth = binarySearch(a, diff);
      if (forth < 0) continue;
      if (v.has(forth)) continue;
      if (forth === i) continue;
      const res = Array.from(v).concat(forth, i);
      const serialized = res.sort((a, b) => a - b).join('-');
      if (printed[serialized]) continue;
      console.log(Array.from(v).concat(forth, i));
      printed[serialized] = true;
    }
  }
};

// fourElementSum([10, 2, 3, 4, 5, 9, 7, 8], 23);
fourElementSum([10, 20, 30, 40, 1, 2], 91);

let ar = [];
for (let i = 0; i < 10; i += 1) {
  ar.push(i + 1);
}
for (let i = 0; i < ar.length; i += 1) {
//  console.log(binarySearch(ar, i + 1));
}

