const str = 'i7difdk(ds()))98ijdskjf(89lk)8w(((()))))';

const balanced = str => {
  let res = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === '(') {
      res++;
    }
    if (str[i] === ')') {
      res--;
    }
  }
  return res === 0;
}

/*

(
)

(asd(sd()

 */

const removeUnbalanced = str => {
  if (balanced(str)) {
    return true;
  }
  let c = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === '(') {
      c++;
    }
    if (str[i] === ')') {
      c--;
    }
    if (c < 0) {
      str = str.substring(0, i) + str.substring(i + 1, str.length);
      c = 0;
      i--;
      if (i >= str.length) {
        break;
      }
    }
  }
  c = 0;
  for (let i = str.length - 1; i >= 0; i -= 1) {
    if (str[i] === ')') {
      c++;
    }
    if (str[i] === '(') {
      c--;
    }
    if (c < 0) {
      str = str.substring(0, i) + str.substring(i + 1, str.length);
      c = 0;
      i++;
      if (i >= str.length) {
        break;
      }
    }
  }
  return str;
};

console.log(balanced(str));

const balance = removeUnbalanced(str);
console.log(balance, balanced(balance));

