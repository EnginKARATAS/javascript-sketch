// let array = "da2kr3a2b"
let array = "sskfssbbb9bbb";

let longest = "";
let lastLongestLength = 0;
for (let i = 0; i < array.length; i++) {
  console.log("🚀 ~ i:", i);
  let val1 = array[i];
  let counter = 0;
  for (let k = i + 1; k < array.length; k++) {
    let val2 = array[k];
    if (val1 === val2) { 
      counter++;
      longest += val2;
      if (array[i + 1] !== array[k + 1])
        lastLongestLength = counter;
      break;
    }
  }
}
console.log(`longest:`, longest);
