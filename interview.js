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

// console.log(removeDuplicates([1, 2, 3, 3]));

//solution 2 includes an array
let existingDuplicates2 = (arr) => {
  let includingNumbersArr = [];
  arr.forEach((el) => {
    if (!includingNumbersArr.includes(el)) includingNumbersArr.push(el);
  });
  return includingNumbersArr;
};
// console.log(existingDuplicates2([1, 2, 3, 3]));

//solution 3 with reduce
let numss = [1, 2, 3, 3];

let isExsistWithReduce = (arr) => {
   arr.reduce((acc, el) => {
    return acc.includes(el) ? acc : [...acc, el];
  }, []);
};
// console.log(isExsistWithReduce(numss));

//
//Sort the array of numbers
//

//sol1
// console.log([5, 2, 3, 8, 5, 4].sort((a, b) => (a > b ? 1 : -1)));
//sol2 //a-b <0 b is bigger switch else not switch. otomatic way.
// console.log([5, 2, 3, 8, 5, 4].sort((a, b) => a - b));

//
//Sort the array of object by auyhor`s last name
//

const books = [
  { name: "Harry Potter", author: "Joanne Bwling" },
  { name: "Warcross", author: "Marie Cu" },
  { name: "The Hunger Games", author: "Suzanne Aollins" },
];

books.sort((book1, book2) => {
  const authorLastName1 = book1.author.split(" ")[1];
  const authorLastName2 = book2.author.split(" ")[1];
  return authorLastName1 < authorLastName2 ? -1 : 1;
});

// console.log(books);

//
//Write a function which implement range
//

//low level solition
let range = (start, end) => {
  let result = [];
  if (start > 0 && start < 100 && start < end && end < 1000) {
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }
};
// console.log(range(1, 20));

//js solution
const range2 = (start, end) => {
  return [...Array(end - 1).keys()].map((el) => el + start);
};

// console.log(range2(2, 10));

//
// Write a function which implements shuffle
//

//my solituon
const shuffleArr = [1, 2, 3, 4, 5, 6];
const shuffle = (arr) => {
  return arr.sort(
    (a, b) =>
      a * Math.floor(Math.random(1, 100) * 10) -
      b * Math.floor(Math.random(1, 100) * 10)
  );
};

// console.log(shuffle(shuffleArr));

//clean better solition
const shuffle2 = (arr) => {
  return arr
    .map((el) => ({ rand: Math.random(), value: el }))
    .sort((a, b) => a.rand - b.rand)
    .map((el) => el.value);
};

// console.log(shuffle2([1, 2, 3, 4, 5]));

//
// Find the number of occurences of minimum value in the list
//

//my solution
let countRepeatMinValue = (arr) => {
  let minVal = arr.sort((a, b) => a - b)[0];
  let i = 0;
  arr.forEach((index) => {
    if (index == minVal) {
      i += 1;
    }
  });
  return i;
};

// console.log(countRepeatMinValue([6, 5, 4, 7, 4, 4, 4, 8, 4, 4, 4]));

//sol2
const arr4 = [6, 5, 4, 7, 4, 4, 4, 8, 4, 4, 4];
const minVal = Math.min(...arr4);
const countOfMin = arr4.filter((el) => el === minVal).length;

// console.log(countOfMin);

//
//Design a class for employee which takes id and name in during construction of object and has a salary property
//
class Employee {
  constructor(id, name) {
    if (!id || !name) {
      throw new Error("Employee id and name are mandatory");
    }
    this.id = id;
    this.name = name;
  }

  setSalary(salary) {
    this.salary = salary;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }
}

class Manager extends Employee {
  setDepartment(name) {
    this.departmentName = name;
  }
  getDepartment() {
    return this.departmentName;
  }
}

const employee = new Employee(1, "adam foo");
// console.log(employee.getName());
const manager = new Manager(2, "mehmet foo");
manager.setDepartment("IT");
// console.log(manager.getDepartment());

//
//Design a class like on the top but with prototypes(functions)
//
var Employee2 = function (id, name) {
  if (!id || !name) {
    throw new Error("Employee id and name are mandatory");
  }
  this.id = id;
  this.name = name;

  Employee.prototype.setSalary = function(salary) {
    this.salary = salary;
  }

  Employee.prototype.getId = function() {
    return this.id;
  }

  Employee.prototype.getName = function(){
    return this.name
  }

};
const employee2 = new Employee(1, "adam foo");
// console.log(employee2.getName())

import nameEn, {getName, getSurname} from "./interview_module.js"

console.log(nameEn() + getName(), getSurname())


