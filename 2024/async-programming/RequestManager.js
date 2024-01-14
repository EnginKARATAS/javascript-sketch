// Design a utility which takes URL and a value for atflempts which will attempt to make a fetch request. If on failure it tries again with increasing delay for number of times which user has requested

const requestHandler = (url, options, attempts = 3) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(resolve)
      .catch((err) => {
        const isLastAttempt = attempts === 1;
        if (isLastAttempt) {
          return reject(err);
        }
        setTimeout(() => {
          requestHandler(url, options, attempts - 1);
        }, 3000);
      });
  });
};

requestHandler("https://www.enginkaratas.com")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
