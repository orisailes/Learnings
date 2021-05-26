var favoriteActivites;
favoriteActivites = ['test', 'sleep'];
var person = {
    name: "ori",
    age: 24,
    hobbies: favoriteActivites
};
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
