// https://www.geeksforgeeks.org/word-break-problem-using-backtracking/

const words = new Set(['i', 'like', 'sam', 'sung', 'samsung', 'mobile', 'ice', 'cream', 'icecream', 'man', 'go', 'mango', 'and']);

const allWordBreaks = (dict, word, start = 0, current = []) => {
  if (start >= word.length && word.endsWith(current[current.length - 1])) {
    console.log(current.join(' '));
    return;
  }
  for (let i = start + 1; i <= word.length; i += 1) {
    if (dict.has(word.substring(start, i))) {
      current.push(word.substring(start, i));
      allWordBreaks(dict, word, i, current);
      current.pop();
    }
  }
};

allWordBreaks(words, 'ilikesamsungmobile');
allWordBreaks(words, 'ilikeicecreamandmango');

