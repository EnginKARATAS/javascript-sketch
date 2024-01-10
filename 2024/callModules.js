// call here with npm serve es6
// import getFullName, {getName, getSurname} from "./es6.js"

// console.log(getFullName("Engin", "Karataş"), getName("Engin"), getSurname("Karataş"));

// call here with node ./common
const getFullName2 = require("./common")
console.log(getFullName2("Engin", "Karataş"))
 