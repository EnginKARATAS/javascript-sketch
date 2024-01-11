//split each new sentence to seperate line in the paragraph text. A sentence can be assummed to be a s string of text terminated with a period(.)

const paragraphElement = document.querySelector("p");
paragraphElement.innerHTML =
  "<p>" + paragraphElement.innerHTML.split(".").join(".</p><p>") + "</p>";
