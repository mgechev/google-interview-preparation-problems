const helper = (s, d, i = 0, res = [], cache = {}) => {
  if (cache[i]) return;
  if (d.has(s)) {
    res.push(s);
    return res;
  }
  if (i >= s.length) return;
  helper(s.substring(0, i) + s.substring(i + 1, s.length), d, i, res, cache);
  cache[i] = true;
  helper(s, d, i + 1, res, cache);
  return res;
};

const findLongestWord = (s, d) => {
  if (!d.length) return '';
  const dict = new Set();
  d.forEach(e => dict.add(e));
  const all = (helper(s, new Set(d)) || []).sort((a, b) => b.length - a.length);
  return all.filter(a => a.length === all[0].length).sort((a, b) => a.localeCompare(b)).shift() || '';
};

//console.log(findLongestWord('abpcplea', ['ale','apple','monkey','plea']));
console.log(findLongestWord('', ['ale','apple','monkey','plea']));
console.log(findLongestWord("bab", ["ba","ab","a","b"]));
console.log(findLongestWord("foobarfoobar", ["foo","bar"]));

