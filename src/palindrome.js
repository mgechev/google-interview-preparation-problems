const palindrome = str => {
  if (!str.length) {
    return true;
  }
  const mid = Math.floor(str.length / 2);
  for (let i = 0; i <= mid; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(palindrome('abc'));
console.log(palindrome(''));
console.log(palindrome('aba'));
console.log(palindrome('baba'));
console.log(palindrome('abba'));

