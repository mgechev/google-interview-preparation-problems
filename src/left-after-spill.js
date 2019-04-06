const sum = (arr, i, j) => arr.slice(i, j).reduce((sum, c) => sum + c, 0);

const storedSum = (store, i, j) => {
  store[i] = store[i] || [];
  store[i][j - 1] = store[i][j - 1] || 0;
  store[i + 1] = store[i + 1] || [];
  store[i + 1][j] = store[i + 1][j] || 0;
  return store[i][j - 1] + store[i + 1][j];
};

const area = arr => {
  const store = [];
  const helper = (arr, len) => {
    for (let i = 0; i < arr.length - len; i += 1) {
      store[i] = store[i] || [];
      const innerSum = storedSum(store, i, i + len);
      store[i][i + len] = Math.max(Math.max(Math.min(arr[i], arr[i + len]) * (len - 1) - sum(arr, i + 1, i + len), 0), innerSum);
    }
  };
  for (let i = 1; i < arr.length; i += 1) {
    helper(arr, i);
  }
  return store[0][store.length - 1];
};

const arr1 = [3, 1, 2, 3, 1, 1, 2];

console.assert(area(arr1) === 5);
