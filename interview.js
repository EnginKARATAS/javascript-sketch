let users = [
  {
    id: 1,
    name: "engin",
    age: 19,
    isActive: true,
  },
  {
    id: 2,
    name: "ayse",
    age: 20,
    isActive: true,
  },
  {
    id: 1,
    name: "fatma",
    age: 15,
    isActive: false,
  },
];

const names = users
  .filter((user) => user.isActive)
  .sort((a, b) => (a.age > b.age ? -1 : 1))
  .map((user) => user.name);
// // // console.log(names);

function foo() {
  //bubbles to do top excatly like var
}

//create a counter func wich has increment and getValue functionality
//closures: reach a function outside of a function

//e.g. clouseres 1
function privateCounter() {
  let counter = 1;

  return {
    increment: () => {
      counter += 1;
    },
    getValue: () => {
      return counter;
    },
  };
}

let counter = privateCounter();
counter.increment();
// // // console.log(counter.getValue())

//e.g. closures 2
const privateSecret = () => {
  const secret = "foo";

  return () => secret;
};

const getSecret = privateSecret();
// // console.log(getSecret)

//Js Carrying (carry function)

//simple carrying
function multipy(num1) {
  return (num2) => {
    return num1 * num2;
  };
}

// // console.log(multipy(1)(3))

//actual carrying

let multipy2 = (num1) => (num2) => {
  return num1 * num2;
};
// // // console.log(multipy2(1)(6))

//add element to the array:

//This is my solituon, pushing the old array and not going to create new array
//bad application
const oldArr = [1, 2, 3];
const append1 = (arr, element) => {
  arr.push(element);
  return arr;
};

// console.log(oldArr)
// console.log(append1(oldArr,4))

//better way, not changing an actual array
const append2 = (arr, element) => {
  return [...arr, element];
};
const newNumbers = append2(oldArr, 5);
// console.log(oldArr)
// console.log(append2(oldArr,4))

//write a func which can concatenate 2 arrays
const concatenateArrays = (arr1, arr2) => {
  //   arr1.concat(...arr2); //other way
  return [...arr1, ...arr2]; //modern way
};

const newArr = concatenateArrays([1, 2, 3], [4, 5, 6]);
// console.log(newArr);

//
//Check that user with such name exists in array of objects
//

//rubish
let isSameNameInArray = (name, users) => {
  let exsists = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i].name === name) {
      exsists = true;
    }
  }
  return exsists;
};
// console.log(isSameNameInArray("engin", users));

//js solution 1 // one line solution
let checkNameExsists = (name, arr) => arr.some((el) => el.name === name);
// console.log(checkNameExsists("engin", users));

//js solution 2 find
let checkNameExsists2 = (name, arr) => {
  let isExsistsObj = arr.find((el) => el.name === name);
  return Boolean(isExsistsObj);
};
// console.log(checkNameExsists2("engin", users));

//js solition 3 findIndex
let checkNameExsists4 = (name, arr) => {
  let index = arr.findIndex((el) => el.name === name);
  return index > 0;
};
// console.log(checkNameExsists4("engin", users));

//
//remove all duplicates in the array
//

//solution 1 Set
let removeDuplicates = (arr) => {
  return [...new Set(arr)];
};

console.log(removeDuplicates([1, 2, 3, 3]));

//solution 2 includes an array
let existingDuplicates2 = (arr) => {
  let includingNumbersArr = [];
  arr.forEach((el) => {
    if (!includingNumbersArr.includes(el)) includingNumbersArr.push(el);
  });
  return includingNumbersArr;
};
console.log(existingDuplicates2([1, 2, 3, 3]));

//solution 3 with reduce
let numss = [1, 2, 3, 3];

let isExsistWithReduce = (arr) => {
  accar = arr.reduce((acc, el) => {
    return acc.includes(el) ? acc : [...acc, el];
  }, []);
};
console.log(isExsistWithReduce(numss));


