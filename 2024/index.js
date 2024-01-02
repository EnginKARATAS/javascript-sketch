const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
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

