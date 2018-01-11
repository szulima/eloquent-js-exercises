function deepEqual (val1, val2) {
  if ((typeof (val1 && val2) == "object") && (typeof (val1 || val2) != null)) {
    var count1 = 0, count2 = 0;
    for (x in val1) count1++;
    for (x in val2) count2++;
    if (count1 == count2) {
      for (x in val1) {
        if (deepEqual (val1[x], val2[x]) !== true)
          return false;
      }
      return true;
    }
    else return false;
  }
  else if (val1 == val2)
    return true;
  else return false;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
