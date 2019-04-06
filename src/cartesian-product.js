//
// [['ABC'], ['DEF'], ['GHI']]
//
const cartesianProduct = (arr, current = 0, tempResult = [], finalResult = []) => {
  if (tempResult.length === arr.length) {
    finalResult.push(tempResult.slice());
    return;
  }
  for (let i = 0; i < arr[current].length; i += 1) {
    tempResult.push(arr[current][i]);
    cartesianProduct(arr, current + 1, tempResult, finalResult);
    tempResult.pop();
  }
  return finalResult;
};

const findReplacements = (mapping, str) => {
  const productElements = [];
  for (let i = 0; i < str.length; i += 1) {
    productElements.push(mapping[str[i]]);
  }
  return cartesianProduct(productElements)
    .map(touple => touple.join(''));
};

console.log(findReplacements({
  '1': ['A', 'B', 'C'],
  '2': ['D', 'E', 'F'],
}, '12'));

