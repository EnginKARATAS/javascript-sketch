//create a counter fuction which has increment and getValue functionality
function countNumbers() {
  let counter = 0;
  return {
    getValue: () => counter,
    increaseValue: () => counter += 1
  }
}

//closure that mean make fields private and call them from external call with writing some functions inside the closure function
const numbersAPI = countNumbers();
console.log(numbersAPI.getValue())
console.log(numbersAPI.increaseValue())
console.log(numbersAPI.getValue())
 
//closure scenario
const tokenManager = () =>{
    const token = "foo"
    return () => token
}
tokenAPI = tokenManager();
const showTheClosureFromPrototypeMenuClosure = tokenAPI
const resultOfToken = tokenAPI()
console.dir(showTheClosureFromPrototypeMenuClosure)
console.log("🚀 ~ file: 3index.js:23 ~ resultOfToken:", resultOfToken)
