const maxPriceRod = (lenPrices, rodSize) => {
  const rodMemo = [{ len: 0, price: 0, parts: [] }];
  for (let i = 1; i <= rodSize; i += 1) {
    let optimal = { len: i, price: -Infinity, parts: [] };
    let lenPricesDone = false;
    for (let j = 0; j < lenPrices.length && !lenPricesDone; j += 1) {
      const curPrice = lenPrices[j];
      if (curPrice.len > i) {
        lenPricesDone = true;
      } else {
        let rodMemoDone = false;
        for (let k = 0; k < rodMemo.length && !rodMemoDone; k += 1) {
          const curMemo = rodMemo[k];
          if (curMemo.len + curPrice.len > i) {
            rodMemoDone = true;
          } else if (curMemo.len + curPrice.len === i && curMemo.price + curPrice.price > optimal.price) {
            optimal.price = curMemo.price + curPrice.price;
          }
        }
      }
    }
    rodMemo.push(optimal);
  }
  return rodMemo.pop().price;
};

// [1, 5, 8, 9, 10, 17, 17, 20]

const lenPrices = [
  { len: 1, price: 1 },
  { len: 2, price: 5 },
  { len: 3, price: 8 },
  { len: 4, price: 9 },
  { len: 5, price: 10 },
  { len: 6, price: 17 },
  { len: 7, price: 17 },
  { len: 8, price: 20 }
];

console.log(maxPriceRod(lenPrices, 4));
