function range(start,end,step) {
  var array = [];
  if (step<0) {
    for (i=start;i>=end;i+=step)
      array.push(i);
  }
  else {
    for (i=start;i<=end;(i=i+(step||1)))
      array.push(i);
  }
  return array;
}

function sum(array) {
  var sum = 0;
  for (i=0; i<array.length; i++)
    sum = sum + array[i];
  return sum;
}

console.log(range(2,5));
// [2, 3, 4, 5]
console.log(range(2,5,2));
// [2, 4]
console.log(range(10,1,-1));
// [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(sum(range(10,1,-1)));
// 55
console.log(range(2,5,-1));
// []
