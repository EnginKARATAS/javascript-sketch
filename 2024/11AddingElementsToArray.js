//write a function which gets array and an element and returns a array with this element at the end


//bad code
arr = [1,2]
console.log("🚀 ~ file: 11AddingElementsToArray.js:6 ~ arr:", arr)
append(arr, 3)
console.log("🚀 ~ file: changed arr:", arr)
function append(arr, element){
    //becuse bad code arr.push refference type and it will make arr function mutate
    arr.push(element)
    return arr
}

//good code 
const array = [1,2]
console.log("old ", array);
appendWithValue(array, 3)
console.log("new ", array)
console.log("returned standalone arr: ", appendWithValue(array, 3))
function appendWithValue(arr, item){
    return [...arr, item]
}