//check that user with such name exists in array of objects
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


//v1 engin
const isUserExistsInArr = (arr, name) => arr.map(x=>x.name).includes(name)?true:false
console.log(isUserExistsInArr(users, "Mike"));
//v2
const isUserExistsInArr2 = (arr, name) => arr.some(x=>x.name === name);
console.log(isUserExistsInArr2(users, "Mike"));

//v3.1
const isUserExistsInArr3 = (arr, name) =>{ 
    const resultOfArrForNameExists = arr.find(x=>x.name === name)
    return Boolean(resultOfArrForNameExists)
}
console.log(isUserExistsInArr3(users, "Mike"))
//v3.2
const isUserExistsInArr4 = (arr, name) => arr.findIndex(obj=>obj.name === name)>=0//if not -1
console.log(isUserExistsInArr4(users, "Mike"))
