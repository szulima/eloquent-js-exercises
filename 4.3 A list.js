function arrayToList(array) {
  var list = null;
  for (i=array.length-1;i>=0;i--)
    list = {value: array[i], rest: list};
  return list
}

console.log(arrayToList([10, 20, 30, 40]));
// { value: 10, rest: {value: 20, rest: {value:	30, rest:	{value: 40, rest: null }}}}
