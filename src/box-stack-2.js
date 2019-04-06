const boxes = [[4, 6, 7], [1, 2, 3], [4, 5, 6], [10, 12, 32]];

const rotate = top => {
  return [
    top,
    [top[0], top[2], top[1]],
    [top[1], top[0], top[2]],
    [top[1], top[2], top[0]],
    [top[2], top[1], top[0]],
    [top[2], top[0], top[1]],
  ];
};

const canStack = (base, top) => {
  if (!base) {
    return true;
  }
  return base[1] > top[1] && base[2] > top[2];
};

const cache = {};

const stackBoxes = (boxes, stack, current = 0) => {
  let all = [];
  for (let i = 0; i < boxes.length; i += 1) {
    all = all.concat(rotate(boxes[i]));
  }
  all = all.sort((a, b) => a[1] * a[2] - b[1] * b[2]);
  boxes = all;
  if (current >= boxes.length) {
    cache[current] = stack.slice();
    return cache[current];
  }
  if (cache[current]) {
    return cache[current];
  }
  const base = stack[stack.length - 1];
  let newStack = [];
  if (canStack(base, boxes[current])) {
    newStack = stack.concat([boxes[current]]);
  }
  updated = stackBoxes(boxes, newStack, current + 1);
  nonUpdated = stackBoxes(boxes, stack, current + 1);
  let longest = nonUpdated;
  if (updated.length > nonUpdated.length) {
    longest = updated;
  }
  cache[current] = longest;
  return longest;
};

const result = stackBoxes(boxes, []);

console.log(result);

console.log(result.reduce((p, c) => p + c[0], 0));

