const users2 = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
    age: 18,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
    age: 18,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
    age: 30,
  },
];

const names = users2
  .sort((user1, user2) => (user1.age < user2.age ? 1 : -1))
  .filter((x) => x.isActive)
  .map((x) => x.name);
console.log("after sort and other operations");
console.log(names);
