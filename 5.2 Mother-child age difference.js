function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var agedif = average(ancestry.filter(function (person) {
  return byName[person.mother];
}).map(function (person) {
    return person.born - byName[person.mother].born;
  }));

console.log(agedif);
// 31.22222222222222
