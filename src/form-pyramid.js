// https://leetcode.com/problems/pyramid-transition-matrix/

const pyramidTransition = (bottom, allowed, flip = 0) => {
  if (bottom.length === 1) {
    return true;
  }
  if (flip >= allowed.length) {
    return false;
  }
  let level = '';
  for (let i = 0; i < bottom.length - 1; i += 1) {
    let l = null;
    for (let j = 0; j < allowed.length && !l; j += 1) {
      const a = allowed[j];
      if (a[0] === bottom[i] && a[1] === bottom[i + 1]) {
        l = a[2];
      }
    }
    if (!l) {
      return false;
    }
    level += l;
  }
  if (!pyramidTransition(level, allowed, 0)) {
    const first = allowed.shift();
    allowed.push(first);
    return pyramidTransition(bottom, allowed, flip + 1);
  }
  return true;
}



console.log(pyramidTransition('XYZ', ['XYD', 'YZE', 'DEA', 'FFF']));
console.log(pyramidTransition('XXYX', ['XXX', 'XXY', 'XYX', 'XYY', 'YXZ']));
console.log(pyramidTransition('AFBBAFB', ['BGD','AGF','AGA','EGC','CCF','EGG','EGF','EGE','DCB','DCA','FGE','FGF','FGA','BFB','BFA','CDA','FFF','FFC','GBE','GBB','BEF','BED','AED','DEA','EEG','EEA','DEF','CEE','GEC','GEA','CCC','BDE','GCD','DGC','AFF','AFA','AFB','DDB','DDA','DDE','CBD','ECG','ECF','DGG','CGC','CGF','GGA','FCE','FCF','FEE','FEB','BBG','BBE','BBC','BBB','ADF','ADE','ADB','DFE','DFC','CDF','CDG','EDF','EDG','EDD','FBA','GDC','FBE','BAF','BAD','BAB','BAC','CAC','CAG','DAD','DAE','EAA','EAF','GAD','FAE','ABA','ABE','ABF','EBB','EBC','GFC']));

