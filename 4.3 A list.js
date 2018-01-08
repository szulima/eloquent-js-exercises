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

function nth(list,position) {
  var array = [];
  while (list.rest != null) {
    array.push(list.value);
    list=list.rest;
  }
  array.push(list.value);
  var number = array[position];
  return number;
}

function nthR(list,position) {
  if (!list)
    return undefined;
  else if (position == 0)
    return list.value;
  else
    return nthR(list.rest,position-1);
}

console.log(arrayToList([10, 20, 30, 40]));
// { value: 10, rest: {value: 20, rest: {value:	30, rest:	{value: 40, rest: null }}}}
console.log(listToArray(arrayToList([10, 20, 30])));
// [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// 20
console.log(nthR(arrayToList([10, 20, 30]), 1));
// 20
