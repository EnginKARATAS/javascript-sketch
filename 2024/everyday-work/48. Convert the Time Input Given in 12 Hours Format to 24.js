// Write a function which can convert the time input given in 24 hours format to 12 hours format
// convertToZ4HrsFormat("12:10AM"); // 00:10
// convertToZ4HrsFormat("5:00AM"); // 05:00
// convertToZ4HrsFormat("12:33PM"); // 12:33
// convertToZ4HrsFormat("01:59PM"); // 13:59
// convertToZ4HrsFormat("11:8PM"); // 23:08
// convertToZ4HrsFormat("10:02PM"); // 22:02  
 
const convertToZ4HrsFormat = (timeText) => {
  let leftTwo = timeText.toLowerCase().split("").slice(0, 2);
  let rightTwo = timeText.toLowerCase().split("").slice(3, 5);
  let amOrPm = timeText.toLowerCase().split("").slice(5, 7);

  let numberLeft = +leftTwo.join("");
  let numberRight = +rightTwo.join("");
  let stringAmOrPm = +amOrPm.join("");

  if (numberLeft > 12 && numberLeft <= 24) {
    let bigger12 = numberLeft % 12;
    numberLeft = bigger12
  }
  return `${numberLeft}:${numberRight}`;
};

console.log(convertToZ4HrsFormat("21:29"));
