//create a promise function to be able to use callback function via promise approach

const asyncFunc = (callback) => {
  setTimeout(() => {
    callback(1);
  }, 3000);
};

const promisifyAsyncFunc = () => {
  return new Promise((resolve) => {
    asyncFunc((data) => {
      resolve(data);
    });
  });
};

promisifyAsyncFunc().then((X) => console.log(x));
