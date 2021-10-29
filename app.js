// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Shane',
//   age: 35,
//   hobbies: ['Sports', 'Video Games'],
//   role: [2, 'author'],
// };
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["READ_ONLY"] = "READ ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Shane',
    age: 35,
    hobbies: ['Sports', 'Video Games'],
    role: Role.ADMIN
};
var favoriteActivities;
favoriteActivities = ['Sports', 1];
console.log(person.role);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
