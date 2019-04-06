const swap = (a, i, j) => {
  const t = a[i];
  a[i] = a[j];
  a[j] = t;
};

class Heap {
  constructor() {
    this._data = [];
  }

  insert(n) {
    this._data.push(n);
    const d = this._data;
    let idx = d.length - 1;
    let par = Math.floor(idx / 2);
    while (par >= 0 && d[idx] < d[par]) {
      const oldPar = par;
      par = Math.floor(idx / 2);
      idx = oldPar;
    }
  }

  top() {
    return this._data[0];
  }

  extractMin() {
    const n = this._data.shift();
    const last = this._data.pop();
    if (last !== undefined) {
      this._data.unshift(last);
    }
    this._heapify();
    return n;
  }

  _heapify(idx = 0) {
    const d = this._data;
    if (idx >= d.length) {
      return;
    }
    let min = idx;
    const left = idx * 2 + 1;
    const right = idx * 2 + 2;
    if (left < d.length && d[left] < d[min]) {
      min = left;
    }
    if (right < d.length && d[right] < d[min]) {
      min = right;
    }
    swap(d, min, idx);
    this._heapify(left);
    this._heapify(right);
  }
}

const h = new Heap();
h.insert(5);
h.insert(3);
h.insert(2);
h.insert(8);
h.insert(1);
console.log(h.extractMin());
h.insert(1);
console.log(h.extractMin());
console.log(h.extractMin());
h.insert(1);
console.log(h.extractMin());
console.log(h.extractMin());
console.log(h.extractMin());
console.log(h.extractMin());
h.insert(1);
console.log(h.extractMin());
console.log(h._data);

