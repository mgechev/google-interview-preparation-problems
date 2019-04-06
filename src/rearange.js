var rearange = list => {
  let prev = undefined;
  let next = list.head;

  var rearangeHelper = (node, idx)  => {
    if (!node) {
      return;
    }

    rearangeHelper(node.next, idx + 1);

    if (node.next === prev) {
      var n = next.next;
      next.next = node;
      node.next = n;
      next = n;
      prev = node;
    }

//    if (idx % 2 && next && next.next === node && node.next === next) {
//      node.next = next;
//      next.next = undefined;
//      return;
//    }

  };

  rearangeHelper(list.head, 0);
};


class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

var lista = {};

var a1 = new Node(1);
var a2 = new Node(2);
var a3 = new Node(3);
var a4 = new Node(4);
a1.next = a2;
a2.next = a3;
a3.next = a4;

lista.head = a1;

var listb = {};

var b1 = new Node(1);
var b2 = new Node(2);
var b3 = new Node(3);
var b4 = new Node(4);
var b5 = new Node(5);
b1.next = b2;
b2.next = b3;
b3.next = b4;
b4.next = b5;

listb.head = b1;

rearange(lista);
rearange(listb);
