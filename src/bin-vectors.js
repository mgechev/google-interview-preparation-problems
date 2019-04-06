const binaryVectors = (len, vec = []) => {
  if (vec.length === len) {
    console.log(vec.join(''));
    return;
  }
  vec.push(0);
  binaryVectors(len, vec);
  vec.pop();
  vec.push(1);
  binaryVectors(len, vec);
  vec.pop();
};

console.log(binaryVectors(3));

