// https://leetcode.com/problems/flatten-2d-vector/description/

const Vector2D = function (vec2d) {
  this.i = 0;
  this.j = 0;
  this.v = vec2d;
  this._normalize();
};


Vector2D.prototype.hasNext = function() {
  return this.v.length > this.i && this.v[this.i].length > this.j;
};

Vector2D.prototype.next = function() {
  if (!this.hasNext()) {
    return undefined;
  }
  const res = this.v[this.i][this.j];
  this.j++;
  this._normalize();
  return res;
};

Vector2D.prototype._normalize = function () {
  if (this.v[this.i] && this.v[this.i].length - 1 >= this.j) {
    return;
  }
  while (this.v[this.i] && this.v[this.i].length <= this.j) {
    this.j = 0;
    this.i++;
  }
};

const v = new Vector2D([[1,2],[3],[4,5,6]]);
console.log(v.hasNext());
console.log(v.next());
console.log(v.next());
console.log(v.next());
console.log(v.next());
console.log(v.next());
console.log(v.next());
console.log(v.next());

