// https://www.geeksforgeeks.org/given-sorted-dictionary-find-precedence-characters/

const a = ['baa', 'abcd', 'abca', 'cab', 'cad'];
const b = ['caa', 'aaa', 'aab'];

const helper = (graph, k, result, visited, tmp) => {
  if (visited[k]) {
    return;
  }
  if (tmp[k]) {
    throw new Error('Cycle');
  }
  tmp[k] = true;
  Object.keys(graph[k] || {}).forEach(c => helper(graph, c, result, visited, tmp));
  tmp[k] = false;
  visited[k] = true;
  result.push(k);
};

const topologicalSort = graph => {
  const result = [];
  const visited = {};
  Object.keys(graph).forEach(k => {
    helper(graph, k, result, visited, {});
  });
  return result.reverse();
};

const letterOrdering = a => {
  const maxWord = a.reduce((c, w) => Math.max(c, w.length), 0);
  const map = {};
  let num = 0;
  for (let i = 0; i < maxWord; i += 1) {
    let prefix = a[0].substr(0, i);
    for (let j = 1; j < a.length; j += 1) {
      if (a[j].startsWith(prefix)) {
        const x = a[j - 1];
        const y = a[j];
        if (x[i] !== y[i]) {
          map[x[i]] = map[x[i]] || {};
          map[x[i]][y[i]] = true;
        }
      } else {
        prefix = a[j].substr(0, i);
      }
    }
  }
  return topologicalSort(map);
};

console.log(letterOrdering(a));
console.log(letterOrdering(b));

