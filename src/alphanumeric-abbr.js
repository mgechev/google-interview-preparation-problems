// https://www.geeksforgeeks.org/alphanumeric-abbreviations-of-a-string/

const num = c => /\d/.test(c.toString());

const format = c => {
  let soFar = 0;
  let res = []
  for (let i = 0; i < c.length; i += 1) {
    if (num(c[i])) {
      soFar += parseInt(c[i]);
    } else {
      if (soFar !== 0) {
        res.push(soFar);
        soFar = 0;
      }
      res.push(c[i]);
    }
  }
  if (soFar !== 0) {
    res.push(soFar);
  }
  return res;
};

const alphanumAbbrsImpl = (str, i = 0) => {
  if (i >= str.length) {
    console.log(format(str).join(''));
    return;
  }
  alphanumAbbrsImpl(str, i + 1);
  const bak = str[i];
  str[i] = 1;
  alphanumAbbrsImpl(str, i + 1);
  str[i] = bak;
};

const alphanumAbbrs = str => alphanumAbbrsImpl(str.split(''), 0);

alphanumAbbrs('ABC');
console.log('-----------');
alphanumAbbrs('ANKS');
console.log('-----------');
alphanumAbbrs('ABCDEFGHI');
console.log('-----------');
alphanumAbbrs('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
