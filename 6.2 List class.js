function arrayToList(array) {
  var list = null;
  for (i=array.length-1;i>=0;i--)
    list = {value: array[i], rest: list};
  return list;
}

function listToArray(list) {
  var array = [];
  while (list.rest != null) {
    array.push(list.value);
    list=list.rest;
  }
  array.push(list.value);
  return array;
}

class List {
  constructor (value, rest) {
    this.head = {value: value, rest: rest}
  }
  get length () {
    return listToArray(this.head).length;
  }
  toArray() {
    return listToArray(this.head);
  }
  static fromArray (array) {
    let temp = new List (null, null);
    temp.head = arrayToList(array);
    return temp;
  }
}

console.log(List.fromArray([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(List.fromArray([10, 20, 30]).toArray());
// → [10, 20, 30]
console.log(new List(2, List.empty).length);
// → 1
