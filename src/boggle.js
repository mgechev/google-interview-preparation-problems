// https://www.geeksforgeeks.org/boggle-set-2-using-trie/

const matrix = [['G','I','Z'],
                ['U','E','K'],
                ['Q','S','E']];

const dictionary = new Set(['GEEKS', 'FOR', 'QUIZ', 'GO']);

const copy = a => {
  let res = [];
  for (let i = 0; i < a.length; i += 1) {
    res[i] = (a[i] || []).slice();
  }
  return res;
};

const findWordsWithStart = (m, d, [i, j], c = '', ca) => {
  if (i < 0 || j < 0 || i >= m.length || j >= m[i].length) {
    return;
  }
  ca[i] = ca[i] || [];
  if (ca[i][j]) {
    return;
  }
  ca[i][j] = true;
  c = c + m[i][j];
  if (d.has(c)) {
    console.log(c);
    return;
  }
  findWordsWithStart(m, d, [i + 1, j], c, ca);
  findWordsWithStart(m, d, [i - 1, j], c, ca);
  findWordsWithStart(m, d, [i, j + 1], c, ca);
  findWordsWithStart(m, d, [i, j - 1], c, ca);
  findWordsWithStart(m, d, [i + 1, j + 1], c, ca);
  findWordsWithStart(m, d, [i - 1, j - 1], c, ca);
  findWordsWithStart(m, d, [i - 1, j + 1], c, ca);
  findWordsWithStart(m, d, [i + 1, j - 1], c, ca);
  ca[i][j] = false;
};

const findWords = (m, d) => {
  const cache = [];
  for (let i = 0; i < m.length; i += 1) {
    for (let j = 0; j < m[i].length; j += 1) {
      findWordsWithStart(m, d, [i, j], '', cache);
    }
  }
};

findWords(matrix, dictionary);
