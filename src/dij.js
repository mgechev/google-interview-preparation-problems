var distMatrix =
   [[Infinity, 7,        9,        Infinity, Infinity, 16],
    [7,        Infinity, 10,       15,       Infinity, Infinity],
    [9,        10,       Infinity, 11,       Infinity, 2],
    [Infinity, 15,       11,       Infinity, 6,        Infinity],
    [Infinity, Infinity, Infinity, 6,        Infinity, 9],
    [16,       Infinity, 2,        Infinity, 9,        Infinity]];

const dijkstra = (src, dest, graph) => {
  const queue = [src];
  const dist = {};
  const inQueue = {};
  inQueue[src] = true;
  dist[src] = 0;
  const visited = {};
  const extractMin = (queue, dist) => {
    let min = Infinity;
    let node = undefined;
    for (let i = 0; i < queue.length; i += 1) {
      const c = queue[i];
      if (dist[c] !== undefined && dist[c] < min && !visited[c]) {
        min = dist[c];
        node = c;
      }
    }
    if (node !== undefined) {
      visited[node] = true;
    }
    return node;
  };
  while (queue.length) {
    const c = extractMin(queue, dist);
    if (c === undefined) {
      return Infinity;
    }
    if (c === dest) {
      return dist[c];
    } else {
      for (let n = 0; n < graph[c].length; n += 1) {
        if (n !== c) {
          dist[n] = Math.min(dist[n] || Infinity, dist[c] + graph[c][n]);
          if (!inQueue[n] && isFinite(graph[c][n])) {
            inQueue[n] = true;
            queue.push(n);
          }
        }
      }
    }
  }
  return Infinity;
};

console.log(dijkstra(0, 2, distMatrix)); // 9¬

