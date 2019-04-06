const maxPriceRodHelper = (lenPrices, rodSize, currentState = { len: 0, price: 0 }, min = 0) => {
  if (rodSize < 0) {
    return -Infinity;
  }
//  if (cache[rodSize - currentState.len] !== undefined) {
//    return cache[rodSize - currentState.len];
//  }
  if (currentState.len === rodSize) {
    return currentState.price;
  }
  if (currentState.len > rodSize) {
    return -Infinity;
  }
  let maxPrice = -Infinity;
  for (let i = min; i < lenPrices.length; i += 1) {
    let c = lenPrices[i];
    let price = maxPriceRodHelper(lenPrices, rodSize, {
      len: currentState.len + c.len,
      price: currentState.price + c.price
    }, i);
    if (price > maxPrice) {
      maxPrice = price;
    }
  }
//  cache[rodSize - currentState.len] = maxPrice;
  return maxPrice;
};

const maxPriceRod = (lenPrices, rodSize) => {
  const cache = {};
  return maxPriceRodHelper(lenPrices, rodSize, { len: 0, price: 0 });
};

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
