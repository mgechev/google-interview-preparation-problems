// https://www.geeksforgeeks.org/generate-all-binary-strings-from-given-pattern/

const helper = (p, pls, c) => {
  if (c >= pls.length) {
    console.log(p.join(''));
    return;
  }
  p[pls[c]] = '0';
  helper(p, pls, c + 1);
  p[pls[c]] = '1';
  helper(p, pls, c + 1);
};

const generate = p => {
  p = p.split('');
  const pls = [];
  for (let i = 0; i < p.length; i += 1) {
    if (p[i] === '?') {
      pls.push(i);
    }
  }
  helper(p, pls, 0);
};

generate('1??0?101');

