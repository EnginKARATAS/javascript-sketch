function findSmallest(word, k) {
  let smallest = word;
  word.split("").forEach((value, index) => {
    console.log(value, index);
    const firstPart = word.substr(0, index);
    const slicedPart = word
      .substr(index, index + k)
      .split("")
      .reverse()
      .join("");
    const endPart = word.substr(index + k, word.length);
    const newSmallest = firstPart + slicedPart + endPart;
    if(smallest > newSmallest)
        smallest = newSmallest
    else
        console.log("no smallest");
  });
  console.log(smallest);
}

findSmallest("abfd", 2);
