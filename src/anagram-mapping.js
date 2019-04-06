// https://leetcode.com/problems/find-anagram-mappings/description/

const anagramMappings = (a, b) => {
  const result = [];
  const map = {};
  for (let i = 0; i < a.length; i += 1) {
    map[a[i]] = map[a[i]] || [];
    map[a[i]].push(i);
  }
  for (let i = 0; i < b.length; i += 1) {
    const n = b[i];
    const idx = map[n].pop();
    result[idx] = i;
  }
  return result;
};

console.log(anagramMappings([12, 28, 46, 32, 50], [50, 12, 32, 46, 28]));

