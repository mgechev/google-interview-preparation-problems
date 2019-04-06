// https://leetcode.com/problems/next-closest-time/description/

const nextClosestTime = t => {
  let nextClosest = null;
  const parts = t.split('');
  const p = parseInt;
  const time = [p(parts[0]), p(parts[1]), p(parts[3]), p(parts[4])];

  const diff = (t, s) => {
    const th = parseInt('' + t[0] + t[1]);
    const tm = parseInt('' + t[2] + t[3]);
    let sh = parseInt('' + s[0] + s[1]);
    const sm = parseInt('' + s[2] + s[3]);
    let minsDiff = sm - tm;
    if (minsDiff < 0) {
      minsDiff += 60;
      sh -= 1;
    }
    let hoursDiff = sh - th;
    if (hoursDiff < 0) {
      hoursDiff += 24;
    }
    let diff = 60 * hoursDiff + minsDiff;
    if (diff <= 0) {
      return Infinity;
    }
    return diff;
  };

  const format = t => {
    return t[0].toString() + t[1].toString() + ':' + t[2].toString() + t[3].toString();
  };

  const valid = time => {
    if (parseInt(time[0] + '' + time[1]) > 23) {
      return false;
    }
    if (time[2] > 5) {
      return false;
    }
    return true;
  };

  const findNext = (c = []) => {
    if (c.length === 4) {
      if (valid(c) && (!nextClosest || diff(time, c) < diff(time, nextClosest))) {
        nextClosest = c.slice();
        return;
      }
      return;
    }
    for (let i = 0; i < time.length; i += 1) {
      c.push(time[i]);
      findNext(c);
      c.pop(time[i]);
    }
  };

  findNext();
  return format(nextClosest);
};

console.log(nextClosestTime('19:34'));
console.log(nextClosestTime('23:59'));

