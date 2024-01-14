// Design a memoization function which adds 10 to provided value and take it from cache if it was
// already calculated.
//closure function
const memoizeAdd = () => {
  let cache = {};
  return (value) => {
    if (value in cache) {
      console.log("fetching from cache");
      return cache[value];
    } else {
      console.log("calculating results");
      const result = value + 10;
      cache[value] = result;
      return result;
    }
  };
};

const newAdd = memoizeAdd;
console.log(newAdd(9)); // output: 19 calculated
console.log(newAdd(9)); // output: 19 cache
