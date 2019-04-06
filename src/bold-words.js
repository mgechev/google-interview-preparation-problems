// https://leetcode.com/problems/bold-words-in-string/description/

const boldWords = (words, s) => {
  const b = {};
  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    for (let j = 0; j < s.length; j++) {
      if (s.substring(j).startsWith(w)) {
        for (let k = 0; k < w.length; k++) {
          b[k + j] = true;
        }
      }
    }
  }
  const res = [];
  let open = false;
  for (let i = 0; i < s.length; i++) {
    const bold = b[i];
    if (bold) {
      if (!open) {
        res.push('<b>');
        open = true;
      }
      res.push(s[i]);
    } else {
      if (open) {
        res.push('</b>');
        open = false;
      }
      res.push(s[i]);
    }
  }
  if (open) {
    res.push('</b>');
  }
  return res.join('');
};

console.log(boldWords(['ab', 'bc'], 'aabcda'));
