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
console.log(numbersAPI.increaseValue())
console.log(numbersAPI.getValue())
 
