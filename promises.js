//with function callback
let userleft = false;
let userwaitsserver = false;
function thisisCallback(callback, errorCallback) {
  //(x,y) are callback functions
  if (userleft) errorCallback({ name: "engin", message: "disconnect" });
  else if (userwaitsserver) {
    errorCallback({ name: "engin", message: "user waits" });
  } else {
    callback("yey 200 OK");
  }
}

thisisCallback(
  (message) => {
    console.log(message);
  },
  (error) => {
    console.log(error.name, error.message);
  }
);

//with function promise
function thisisCallback() {
  return new Promise((resolve, reject) => {
    if (userleft) reject({ name: "engin", message: "disconnect" });
    else if (userwaitsserver) {
      reject({ name: "engin", message: "user waits" });
    } else {
      resolve("yey 200 OK");
    }
  });
}

thisisCallback()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error.name, error.message);
  });
