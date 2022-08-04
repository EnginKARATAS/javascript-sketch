//
//Higlight all of the words over 8 characters long in the paragraph text (yellow background e.g.)
//

const paragraph = document.querySelector("p");
paragraph.innerHTML = paragraph.innerHTML
  .split(" ")
  .map((item) =>
    item.length > 8 ? `<span style="background:yellow">${item}</span>` : item
  ).join(" ");
