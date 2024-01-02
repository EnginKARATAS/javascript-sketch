const users = [
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

//v1
const fetchedUserArr = [];
users.forEach((x) => {
  fetchedUserArr.push(x.name);
});
console.log(fetchedUserArr);

//v2
const fetchedUserArr2 = users.map((x) => x.name);
console.log(fetchedUserArr2);

//Get back only active users
//V1
const fetchedUserArr3 = [];
users.forEach((x) => {
  x.isActive ? fetchedUserArr3.push(x.name) : x.name;
});
console.log(fetchedUserArr3);

//v2
const fetchedUser4 = users.filter((x) => x.isActive).map((x) => x.name);
console.log(fetchedUser4);

//v3
//sort actually mutate the array. no need to assign again new array
console.log("before sort array");
console.log(users);
users
  .sort((user1, user2) => (user1.age < user2.age ? 1 : -1))
  .map((x) => x.name);
// after sort array(mutated, changed, evolved)
console.log("after sort array");
console.log(users);


