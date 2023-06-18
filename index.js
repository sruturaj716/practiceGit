function getOldest(people) {
    return people.sort(function (a, b) { return b.age - a.age; })[0];
}
var people = [{ age: 20 }, { age: 30 }, { age: 50 }];
var players = [{ name: "jon", age: 23 }, { name: "mac", age: 28 }, { name: "dor", age: 90 }];

var person = getOldest(players);
