function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var hasKnownMother = [];
ancestry.filter(function(person) {
  return byName[person.mother];
}).forEach(function (person) {
  return hasKnownMother.push(person.born);
});

var motherBorn = [];
ancestry.filter(function(person) {
  return byName[person.mother];
}).map(function(mum){
  return motherBorn.push(byName[mum.mother].born);
});

var age=[];
for (i=0;i<motherBorn.length;i++) {
  age.push(hasKnownMother[i] - motherBorn[i]);
};
console.log(average(age)); 
// 31.22222222222222
