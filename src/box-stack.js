const boxes = [[4, 6, 7], [1, 2, 3], [4, 5, 6], [10, 12, 32]];

const canStack = (base, top) => {
  if (!base) {
    return [top];
  }
  const rotations = [
    top,
    [top[0], top[2], top[1]],
    [top[1], top[0], top[2]],
    [top[1], top[2], top[0]],
    [top[2], top[1], top[0]],
    [top[2], top[0], top[1]],
  ];
  const result = [];
  for (let i = 0; i < rotations.length; i += 1) {
    const c = rotations[i];
    if (c[1] < base[1] && c[2] < base[2]) {
      result.push(c);
    }
  }
  return result;
};

const cache = {};

const stackBoxes = (boxes, stack, current = 0) => {
  if (current >= boxes.length) {
    return stack.slice();
  }
  const base = stack[stack.length - 1];
  const topBoxes = canStack(base, boxes[current]);
  const results = [];
  for (let i = 0; i < topBoxes.length; i += 1) {
    results.push(stackBoxes(boxes, stack.concat([topBoxes[i]]), 0));
  }
  results.push(stackBoxes(boxes, stack, current + 1));
  let longest = results[0];
  for (let i = 1; i < results.length; i += 1) {
    if (results[i].length > longest.length) {
      longest = results[i];
    }
  }
  cache[current] = longest;
  return longest;
};

const result = stackBoxes(boxes, []);

console.log(result);

console.log(result.reduce((p, c) => p + c[0], 0));

