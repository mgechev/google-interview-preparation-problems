// https://leetcode.com/problems/shortest-word-distance/description/

const shortestDistance = (words, word1, word2) => {
  let min = Infinity;
  for (let i = 0; i < words.length - 1; i += 1) {
    for (let j = i + 1; j < words.length; j += 1) {
      if ((words[i] === word1 && words[j] === word2) ||
          (words[j] === word1 && words[i] === word2)) {
        min = Math.min(min, j - i);
      }
    }
  }
  return min;
};

console.log(shortestDistance(['practice', 'makes', 'perfect', 'coding', 'makes'], 'coding', 'practice'));
console.log(shortestDistance(['practice', 'makes', 'perfect', 'coding', 'makes'], 'makes', 'coding'));

