// https://leetcode.com/problems/evaluate-division/

const fill = (g, a, b, c = a, visited = [], res = 1) => {
  if (b === c) {
    g[a][b] = res;
    return;
  }
  if (visited[c]) {
    return;
  }
  visited[c] = true;
  Object.keys(g[c])
    .forEach(k =>
      g[c][k] !== undefined ?
        fill(g, a, b, k, visited, res * g[c][k]) :
        void 0);
};

const transitiveClosure = g => {
  Object.keys(g).forEach(a => 
    Object.keys(g[a])
      .forEach(b =>
        g[a][b] === undefined ? fill(g, a, b) :
        void 0)
  );
};

const calcEquation = (equations, values, queries) => {
  const graph = {};
  const vars = new Set();
  equations.forEach(p => {
    vars.add(p[0]);
    vars.add(p[1]);
  });
  Array.from(vars).forEach(a => {
    graph[a] = {};
    Array.from(vars).forEach(b => graph[a][b] = undefined);
  });
  equations.forEach((pair, i) => {
    graph[pair[0]][pair[1]] = values[i];
    graph[pair[1]][pair[0]] = 1 / values[i];
    graph[pair[0]][pair[0]] = 1;
    graph[pair[1]][pair[1]] = 1;
  });
  transitiveClosure(graph);
  const res = [];
  queries.forEach((q, i) => {
    if (graph[q[0]] === undefined || graph[q[0]][q[1]] === undefined) {
      res.push(-1);
      return;
    }
    res.push(graph[q[0]][q[1]]);
  });
  return res;
};

const equations = [['a', 'b'], ['b', 'c']];
const values = [2.0, 3.0];
const queries = [['a', 'c'], ['b', 'a'], ['a', 'e'], ['a', 'a'], ['x', 'x']];

console.log(calcEquation(equations, values, queries));
