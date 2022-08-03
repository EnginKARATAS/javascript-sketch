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
console.log(newArr);
