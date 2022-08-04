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