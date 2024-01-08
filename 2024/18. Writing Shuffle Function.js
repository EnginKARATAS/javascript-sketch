const shuffleArr = (arr) => {
  return arr
    .map((x) => {
      return {
        sortKey: Math.random(),
        value: x,
      };
    })
    .sort((a, b) => (a.sortKey < b.sortKey ? -1 : 1))
    .map((x) => x.value);
};
console.log(shuffleArr([1, 2, 3, 5, 4]));
