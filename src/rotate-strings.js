// https://leetcode.com/problems/rotate-string/description/

const rotateString = (a, b) => b.length === a.length && (b + b).indexOf(a) >= 0;

