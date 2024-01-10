// Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
const $paragraphElement = document.querySelector("p");
$paragraphElement.innerHTML = $paragraphElement.innerHTML.split(" ")
  .map((x) => {
    return x.length > 8 ? `<span style="background: yellow">${x}</span>` : x;
  })
  .join(" ");

  const  link = document.createElement("a");
  link.href = "https://www.enginkaratas.com";
  link.innerText = "imamhatipleri kapatmak için hemen tıkla!"

  document.body.appendChild(link)
