const getRadix = (num, pad, i) => {
  let str = num.toString();
  const diff = pad - str.length;
  for (let i = 0; i < diff; i += 1) {
    str = '0' + str;
  }
  if (i > str.length - 1) {
    return 0;
  } else {
    return parseInt(str[i]);
  }
};

const radixSort = arr => {
  let msRadix = arr.reduce((accum, el) => Math.max(el.toString().length, accum), 0);
  for (let i = msRadix - 1; i >= 0; i -= 1) {
    let counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let j = 0; j < arr.length; j += 1) {
      let idx = getRadix(arr[j], msRadix, i);
      counts[idx + 1] = counts[idx + 1] + 1;
    }
    for (let j = 1; j < counts.length; j += 1) {
      counts[j] += counts[j - 1];
    }
    let copy = [];
    for (let j = 0; j < arr.length; j += 1) {
      const idx = getRadix(arr[j], msRadix, i);
      copy[counts[idx]++] = arr[j];
    }
    for (let j = 0; j < arr.length; j += 1) {
      arr[j] = copy[j];
    }
  }
  return arr;
};

console.log(radixSort([15, 100, 32, 1239079, 10, 99, 22, 12, 12381997]));

