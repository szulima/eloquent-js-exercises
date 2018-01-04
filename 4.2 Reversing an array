function reverseArray(array) {
  var reverse = [];
  for (i=array.length-1; i>=0; i--)
    reverse[i] = array.shift();
  return reverse;
}

console.log(reverseArray(["A","B","C"]));
// ["C", "B", "A"]

function reverseArrayInPlace(array) {
  for (i = 0; i < Math.floor(array.length/2); i++) {
    var temp = array[i];
    array[i] = array[array.length-1-i];
    array[array.length-1-i] = temp;
   }
}

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// [5, 4, 3, 2, 1]
