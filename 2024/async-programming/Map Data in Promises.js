//You have 2 functions which return promises. Map data from users and userStatuses to get array of users with id, name, isActive
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

const userStatuses = [
  { id: 1, isActive: true },
  { id: 2, isActive: false },
  { id: 3, isActive: true },
];

const getUsers = () => {
  return new Promise((resolve) => {
    resolve(users);
  });
};

const getUserStatuses = () => {
  return new Promise((resolve) => {
    resolve(userStatuses);
  });
};

//v1.0
getUsers().then((users) => {
  getUserStatuses().then((userStasuses) => {
    const mappedUsers = users.map((user) => {
      const isActive = userStatuses.find(
        (userStatus) => userStatus.id === user.id
      ).isActive;
      return { ...user, isActive }; 
    });
    console.log("mappedUsers", mappedUsers);
  });
});

//v1
Promise.all([getUsers(), getUserStatuses()]).then(([users, userStatuses]) => {
  const mappedUsers = users.map((user) => {
    const isActive = userStatuses.find(
      (userStatus) => userStatus.id === user.id
    ).isActive;
    return { ...user, isActive };
  });
  console.log("mappedUsers", mappedUsers);
});

//v2 better readabililty
const mapUsers = (users, userStatuses) => {
  return users.map((user) => {
    const isActive = userStatuses.find(
      (userStatus) => userStatus.id === user.id
    ).isActive;
    return { ...user, isActive };
  });
};
Promise.all([getUsers(), getUserStatuses()]).then(([users, userStatuses]) => {
  console.log("mappedUsers", mapUsers(users, userStatuses));
});

//v3 better`s better
const mapUsers2 = (users, userStatuses) => {
  return users.map((user) => {
    const isActive = userStatuses.find(
      (userStatus) => userStatus.id === user.id
    ).isActive;
    return { ...user, isActive };
  });
};
console.log("mappedUsers", mapUsers2(users, userStatuses));
Promise.all([getUsers(), getUserStatuses()])
  .then(([users, userStatuses]) => mapUsers2(users, userStatuses))
  .then((result) => console.log("mappedUsers", result));
