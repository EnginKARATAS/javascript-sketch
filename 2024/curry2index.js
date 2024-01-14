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

//curry func
function sum(a) {
  console.log("a");
  return function (b) {
    console.log("b");
    return function (c) {
      console.log("c");
      console.log(a + b + c);
    };
  };
}

sum(1);
console.log("----");

//v2 curry func
const sumV2 = (num1) => (num2) => (num3) => console.log(num1 + num2 + num3);

const returnfunction = sum(1);
const returnfunction2 = returnfunction(2);
const returnfunction3 = returnfunction2(3);

//

const sumFunc = sumV2(1);
const actualsum = sumV2(2)(3);

sumV2(1)(2);

//curry but the user wont send function paramaters
const curry = function (fn) {
  var arity = fn.length;
  console.log("the fn", fn, "and the length", arity);
  return function f1(...args) {
    if (args.length >= arity) {
      console.log("enough arguments");
      return fn(...args);
    } else {
      console.log("needs more args");
      return function f2(...moreArgs) {
        var newArgs = args.concat(moreArgs);
        return f1(...newArgs);
      };
    }
  };
};

//the curry value is a function
const curriedSum = curry(
  (notThe, valueOkay, justArgs, oneMore) =>
    notThe + valueOkay + justArgs + oneMore
);
//(3,4) is just a one arg.
curriedSum(1, 2, (3, 4), 4);

//curry stricted to send two parameter
const get = curry((property, object) => object[property]);
const getId = get("id");

const map = curry((fn, arr) => arr.map(fn));
const getIds = map(getId);