//https://leetcode.com/problems/reverse-words-in-a-string/description/

const reverseWords = s => s.trim().split(' ').map(s => s.trim()).filter(s => !/^\s+$/.test(s) && s.length).reverse().join(' ');

console.log(reverseWords('the sky is blue'));
console.log(reverseWords('   a   b '));

