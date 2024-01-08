//Remove all duplicates in the array
const arr = [1, 1, 2, 6, 4, 4, 6, 5, 1, 3, 7, 3, 3, 1];

//v1 with set, duplications could write one line
const removeDuplicationArr2 = (arr) => {
  return [...new Set(arr)];
};
console.log(removeDuplicationArr2(arr));
//v2 with logic
const removeDuplicationArr = (arr) => {
  const newArr = [];
  arr.forEach((x) => {
    if (!newArr.some((newArrElement) => newArrElement === x))
      //or newArr.includes
      newArr.push(x);
  });
  return newArr.sort((a, b) => a - b);
};
console.log(removeDuplicationArr(arr));
//v3
const removeDuplicationArr3 = (arr) => {
  return arr
    .reduce((acc, el) => {
      return !acc.includes(el) ? [...acc, el] : acc;
    }, [])
    .sort((a, b) => a - b);
};
console.log(removeDuplicationArr3(arr));
