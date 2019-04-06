var distMatrix =
   [[Infinity, 7,        9,        Infinity, Infinity, 16],
    [7,        Infinity, 10,       15,       Infinity, Infinity],
    [9,        10,       Infinity, 11,       Infinity, 2],
    [Infinity, 15,       11,       Infinity, 6,        Infinity],
    [Infinity, Infinity, Infinity, 6,        Infinity, 9],
    [16,       Infinity, 2,        Infinity, 9,        Infinity]];

const dijkstra = (start, target, distMatrix) => {
  const dists = [];
  const visited = [];
  for (let i = 0; i < distMatrix.length; i += 1) {
    dists[i] = Infinity;
    visited[i] = false;
  }
  dists[start] = 0;

  const getMin = () => {
    let result = undefined;
    let minDistance = Infinity;
    for (let i = 0; i < dists.length; i += 1) {
      if (!visited[i] && dists[i] < minDistance) {
        minDistance = dists[i];
        result = i;
      }
    }
    if (Number.isFinite(minDistance)) {
      return result;
    }
    return undefined;
  };

  const possibleMoves = () => {
    return getMin() !== undefined;
  };

  while (possibleMoves()) {
    const current = getMin();
    if (current === target) {
      return dists[current];
    }
    visited[current] = true;
    for (let i = 0; i < distMatrix.length; i += 1) {
      dists[i] = Math.min(dists[i], dists[current] + distMatrix[current][i]);
    }
  }
  return Infinity;
};

console.log(dijkstra(0, 2, distMatrix)); // 9¬
