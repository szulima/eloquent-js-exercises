function every(array, condition) {
  for (var i=0; i<array.length; i++) {
    if (condition(array[i]) == true);
    else return false;
  };
  return true;
};

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
