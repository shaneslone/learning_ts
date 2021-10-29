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

enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 'READ ONLY',
  AUTHOR = 'AUTHOR',
}

const person = {
  name: 'Shane',
  age: 35,
  hobbies: ['Sports', 'Video Games'],
  role: Role.ADMIN,
};

let favoriteActivities: any[];
favoriteActivities = ['Sports', 1];

console.log(person.role);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
