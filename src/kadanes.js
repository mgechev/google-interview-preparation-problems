const arr = [-1, 4, 2, -3];

const max = a => {
  if (a.length === 0) {
    return undefined;
  }
  let glob = a[0];
  let sofar = a[0];
  for (let i = 1; i < a.length; i += 1) {
    sofar = Math.max(a[i], sofar + a[i]);
    glob = Math.max(glob, sofar);
  }
  return glob;
};

console.log(max(arr));

