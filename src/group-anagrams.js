// https://leetcode.com/problems/group-anagrams/description/

const groupAnagrams = strs => {
  const groups = {};
  for (let i = 0; i < strs.length; i += 1) {
    const s = strs[i].split('').sort((a, b) => a.localeCompare(b)).join('');
    groups[s] = groups[s] || [];
    groups[s].push(strs[i]);
  }
  return Object.keys(groups).map(k => groups[k]);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

