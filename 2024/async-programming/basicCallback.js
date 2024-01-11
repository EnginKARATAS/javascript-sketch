//write an asynchronus function whic executes callback after finishin its asynchrous task

//v1 engin(but async keyword doesnt mean )
// async function getBread(callback){
//     console.log("before fetch");
//     await fetch("https://jsonplaceholder.typicode.com/todos/1").then(x=>callback(x))
//     console.log("after await");
// }

// function amazingBreadConsolLog(retriver){
//     console.log("the bread is after fetch api", retriver);
// }
// getBread(amazingBreadConsolLog)

//v2
const asyncFn = (callback) => {
  setTimeout(callback("done"), 1000);
};

asyncFn((x)=>console.log(x))
