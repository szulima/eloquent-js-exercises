function arrayToList(array) {
  var list = null;
  for (i=array.length-1;i>=0;i--)
    list = {value: array[i], rest: list};
  return list
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

function prepend(value,list) {
  list = {value: value, rest: list};
  return list;
}

console.log(arrayToList([10, 20, 30, 40]));
// { value: 10, rest: {value: 20, rest: {value:	30, rest:	{value: 40, rest: null }}}}
console.log(listToArray(arrayToList([10, 20, 30])));
// [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// {value: 10, rest: {value: 20, rest: null}}
