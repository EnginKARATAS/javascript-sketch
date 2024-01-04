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
function sum(a){
  return function(b){
    return function(c){
      console.log(a+b+c)
    }
  }
}

//v2 curry func
const sumV2 = num1 => num2 => num3 => console.log(num1+num2+num3);


// sum(1)(2)(3);
const returnfunction = sum(1);
const returnfunction2 = returnfunction(2);
const returnfunction3 = returnfunction2(3);

//

sum(1)(2)(3);
sumV2(1)(2);
