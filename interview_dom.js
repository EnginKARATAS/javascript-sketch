//
//Higlight all of the words over 8 characters long in the paragraph text (yellow background e.g.)
//

const paragraph = document.querySelector("p");
paragraph.innerHTML = paragraph.innerHTML
  .split(" ")
  .map((item) =>
    item.length > 8 ? `<span style="background:yellow">${item}</span>` : item
  )
  .join(" ");

//Add a link bact to the source of the text after the paragraph tag.
const link = document.createElement("a");
link.href = "www.google.com";
const linkP = document.createElement("p");
linkP.innerHTML = "lorem ipsum click";
link.append(linkP);
// document.body.append(link);

//Split each new sentence to a separate line in the paragraph text. A sentence text could terminated with a period
const parag = document.querySelector("p");
parag.innerHTML = parag.innerHTML.split(".").join(".</p><p>") + "</p>";

//
// Implement a click on todo item as fast as possible
//

//bad performance if 1000
// let items = document.querySelectorAll("li");
// items.forEach((item) => {
//   item.addEventListener("click", () => {
// //     console.log("you clicke on item: " + item.innerText);
//   });
// });

//better performance create single listenner
const app = document.querySelector(".todo-app");

app.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("item")) {
    // console.log("you clicked on item: " + e.target.innerText);
  }
});

//
// Write an example of fetching data using fetch API
//
fetch("https://api.github.com/users/enginkaratas/repos")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
  })
  .catch((err) => {
    // console.log(err);
  });

//
// Write an asynchronous function which executes callback after finishing it`s asynchronus task
//
//callback function
//callback functions doesn`t use much after promises includes to js by default
const asyncFn = (callback) => {
  setTimeout(callback("done"), 2000);
};

asyncFn((message) => {
  // console.log("callback " + message);
});

const testcall = (callback) => {
  callback("foo lorem");
};

const displayConsole = (name) => {
  setTimeout(() => {
    // console.log(name);
    setTimeout(() => {
      // console.log(name + name);
      setTimeout(() => {
        // console.log(name + name + name);
      });
    }, 1000);
  }, 1000);
};

// console.log(testcall(displayConsole));

//promise
const promisely = new Promise((resolve, reject) => {
  const isOk = true;

  if (isOk) {
    resolve(200);
  } else {
    reject(400);
  }
});

promisely
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  });

//
//Even numbers with promise
//
const evenPromise = (arr) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) {
      reject("It`s not an array");
    }
    const evenNumbers = arr.filter((item) => item % 2 === 0);
    resolve(evenNumbers);
  });
};

evenPromise([1, 2, 3, 4, 5])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
