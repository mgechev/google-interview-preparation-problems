const optimalTasksOrder = (tasks, cd) => {
  const count = {};
  const coolDown = {};
  tasks.split('').forEach(t => {
    count[t] = (count[t] || 0) + 1;
    coolDown[t] = 0;
  });
  let total = tasks.length;
  let task = 0;
  let result = '';
  let len = Object.keys(count).length;
  tasks = Object.keys(count);
  while (total) {
    let all = false;
    c = Object.keys(coolDown).reduce((a, c) => {
      if (coolDown[c] < coolDown[a] && count[c] > 0) {
        return c;
      }
      return a;
    });
    if (coolDown[c] !== 0) {
      result += '_';
      all = true;
    } else {
      result += c;
      count[c] -= 1;
      total -= 1;
      if (count[c] === 0) {
        tasks.splice(task, 1);
      }
    }
    Object.keys(coolDown).forEach(t => {
      if (t === c && !all) {
        coolDown[t] = cd;
      } else {
        coolDown[t] -= 1;
        if (coolDown[t] < 0) {
          coolDown[t] = 0;
        }
      }
    });
  }
  return result;
};

console.log(optimalTasksOrder('AAABBBCCC', 2));
console.log(optimalTasksOrder('AAABC', 2));
console.log(optimalTasksOrder('AAABBCCD', 2));

