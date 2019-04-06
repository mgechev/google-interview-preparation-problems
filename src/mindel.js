// https://practice.geeksforgeeks.org/problems/find-largest-word-in-dictionary/0

const find = (str, dict, i = 0) => {
  if (dict.has(str)) {
    return str;
  }
  if (i >= str.length) {
    return;
  }
  if (str.length <= 0) {
    return;
  }
  return find(str, dict, i + 1) || find(str.substring(0, i) + str.substring(i + 1, str.length), dict, i);
};

const subSeq = (s, t) => {
  let j = 0;
  for (let i = 0; i < s.length && j < t.length; i += 1) {
    if (s[i] === t[j]) {
      j += 1;
    }
  }
  return j === t.length;
};

const findEfficient = (str, dict) => {
  const arr = Array.from(dict);
  let max = '';
  for (let i = 0; i < arr.length; i += 1) {
    if (max.length < arr[i].length && subSeq(str, arr[i])) {
      max = arr[i];
    }
  }
  if (max === '' && !dict.has(max)) {
    return undefined;
  }
  return max;
};

console.log(find('abpcplea', new Set(['ale', 'apple', 'monkey', 'plea'])));
console.log(findEfficient('abpcplea', new Set(['ale', 'apple', 'monkey', 'plea'])));
