function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byCentury = {};
(ancestry.map(function(person) {
  return byCentury[Math.ceil(person.died / 100)] = [];
}));

ancestry.forEach(function(person) {
  byCentury[Math.ceil(person.died / 100)].push(person.died-person.born);
});

for (x in byCentury) 
  byCentury[x] = average(byCentury[x]);

console.log(byCentury);

/* {
16:	43.5
17:	51.2
18:	52.78947368421053
19:	54.833333333333336
20:	84.66666666666667
21:	94
} */
