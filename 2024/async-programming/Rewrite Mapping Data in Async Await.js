//You have 2 functions which return promises. Mağ data from users and userStatuses to get array of users with id name and isActive
//rewrite previous task in async await

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

const getMapUsers = async () => {
  //yry catch is important in async await because wont see any error in await. To catch it use try catch
  try {
    const users = await getUsers();
    const userStatuses = await getUserStatuses();
    const mappedUsers = users.map((user) => {
      const isActive = userStatuses.find(
        (userStatus) => userStatus.id === user.id
      ).isActive;
      return { ...user, isActive };
    });
    console.log("mappedUsers", mappedUsers);
  } catch (err) {
    console.log(err);
  } 
};

getMapUsers();
